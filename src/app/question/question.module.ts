import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuestionPage } from './question.page';
import { Question10Component } from './question10/question10.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuestionPage, Question10Component]
})
export class QuestionPageModule {}
