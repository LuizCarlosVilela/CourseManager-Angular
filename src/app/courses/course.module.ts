import { ReplacePipe } from './../pipe/replace.pipe';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StarModule } from './../shared/component/star/star.module';

import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent, ReplacePipe],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
    ]),
  ],
})
export class CourseModule {}
