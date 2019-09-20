import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreensRoutingModule } from './splash-screens-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrimarySplashScreenPage } from './primary-splash-screen/primary-splash-screen.page';
import { SplashScreensComponent } from './splash-screens.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashScreensRoutingModule,
  ],
  declarations: [SplashScreensComponent, PrimarySplashScreenPage],
})
export class SplashScreensModule {}
