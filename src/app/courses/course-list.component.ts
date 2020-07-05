import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: "app-course-list",
    templateUrl: "./course-list.component.html"
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: "Angula",
                imageUrl: "",
                price: 99.99,
                code: "XPS123",
                duration: 120,
                rating: 4.5,
                releaseDate: "November, 2, 2019"
            },
            {
                id: 2,
                name: "Angula",
                imageUrl: "",
                price: 99.99,
                code: "XPS123",
                duration: 120,
                rating: 4.0,
                releaseDate: "November, 4, 2019"
            }
        ]
    }
}