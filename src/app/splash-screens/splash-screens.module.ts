import { NgModule } from '@angular/core';
import { CommonModule } from '../common.module';
import { SplashScreensRoutingModule } from './splash-screens-routing.module';

import { PrimarySplashScreenPage } from './primary-splash-screen/primary-splash-screen.page';
import { SecondarySplashScreenPage } from './secondary-splash-screen/secondary-splash-screen.page';
import { SplashScreensComponent } from './splash-screens.component';

@NgModule({
  imports: [
    CommonModule,
    SplashScreensRoutingModule,
  ],
  declarations: [SplashScreensComponent, PrimarySplashScreenPage, SecondarySplashScreenPage],
})
export class SplashScreensModule {}
