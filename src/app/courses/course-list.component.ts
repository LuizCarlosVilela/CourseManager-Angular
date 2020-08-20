import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  filterCurses: Course[] = [];

  _courses: Course[] = [];

  _filterBY: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retriveAll();
  }

  retriveAll(): void {
    this.courseService.retriveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filterCurses = this._courses;
      },
      error: (e) => console.log('Erro ', e),
    });
  }

  set filter(value: string) {
    this._filterBY = value;

    this.filterCurses = this._courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBY.toLocaleLowerCase()) > -1
    );
  }
  get filter() {
    return this._filterBY;
  }
}
