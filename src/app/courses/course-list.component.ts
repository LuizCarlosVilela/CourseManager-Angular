import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: "app-course-list",
    templateUrl: "./course-list.component.html"
})

export class CourseListComponent implements OnInit {

    filterCurses: Course[] = [];

    _courses: Course[] = [];

    _filterBY: string;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this._courses = this.courseService.retriveAll();
        this.filterCurses = this._courses;
    }

    set filter(value: string){
        this._filterBY = value;

        this.filterCurses = this._courses.filter( (course: Course) => 
        course.name.toLocaleLowerCase().indexOf(this._filterBY.toLocaleLowerCase()) > -1 );
    }
    get filter(){
        return this._filterBY;
    }
}