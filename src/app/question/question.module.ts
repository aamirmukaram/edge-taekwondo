import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionPage } from './question.page';
import { Question10Component } from './question10/question10.component';
import { CommonModule } from '../common.module';

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
  declarations: [QuestionPage, Question10Component]
})
export class QuestionPageModule {}
