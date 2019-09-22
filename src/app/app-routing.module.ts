import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SelectLevelPage } from './select-level/select-level.page';
import { SelectQuestionCategoryPage } from './select-question-category/select-question-category.page';

const routes: Routes = [
  { path: '', redirectTo: 'splash-screens', pathMatch: 'full' },
  {
    path: 'splash-screens',
    loadChildren: './splash-screens/splash-screens.module#SplashScreensModule'
  },
  { path: 'select-level', component: SelectLevelPage },
  { path: 'select-question-category/:selectedLevel', component: SelectQuestionCategoryPage },
  { path: 'question/:selectedLevel/:selectedQuestionCategory', loadChildren: './question/question.module#QuestionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
