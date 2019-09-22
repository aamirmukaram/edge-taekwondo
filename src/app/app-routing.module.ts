import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SelectLevelPage } from './select-level/select-level.page';
import { SelectTestTypePage } from './select-test-type/select-test-type.page';

const routes: Routes = [
  { path: '', redirectTo: 'splash-screens', pathMatch: 'full' },
  {
    path: 'splash-screens',
    loadChildren: './splash-screens/splash-screens.module#SplashScreensModule'
  },
  { path: 'select-level', component: SelectLevelPage },
  { path: 'select-test-type/:selectedLevel', component: SelectTestTypePage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
