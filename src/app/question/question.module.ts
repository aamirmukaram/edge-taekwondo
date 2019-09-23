import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '../common.module';

import { QuestionPage } from './question.page';
import { Question10Component } from './question10/question10.component';
import { Question20Component } from './question20/question20.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuestionPage, Question10Component, Question20Component]
})
export class QuestionPageModule {}
