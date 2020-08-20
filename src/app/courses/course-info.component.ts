import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}
  ngOnInit(): void {
    this.courseService
      .retriveById(+this.route.snapshot.paramMap.get('id'))
      .subscribe({
        next: (course) => (this.course = course),
        error: (e) => console.log('Erro', e),
      });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: (course) => console.log('Curso registrado', course),
      error: (e) => console.log('Erro ', e),
    });
  }
}
