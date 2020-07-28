import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{


    courseId: number;

    constructor(private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.courseId = +this.route.snapshot.paramMap.get('id');
    }
}