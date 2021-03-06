import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimarySplashScreenPage } from './primary-splash-screen/primary-splash-screen.page';
import { SecondarySplashScreenPage } from './secondary-splash-screen/secondary-splash-screen.page';
import { SplashScreensComponent } from './splash-screens.component';

const routes: Routes = [
  {
    path: '', component: SplashScreensComponent, children: [
      { path: 'primary-splash-screen', component: PrimarySplashScreenPage },
      { path: 'secondary-splash-screen', component: SecondarySplashScreenPage },
      { path: '', redirectTo: 'primary-splash-screen', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class SplashScreensRoutingModule {}
