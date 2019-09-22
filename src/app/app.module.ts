import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from './common.module';

import { AppComponent } from './app.component';
import { SelectLevelPage } from './select-level/select-level.page';
import { SelectQuestionCategoryPage } from './select-question-category/select-question-category.page';

@NgModule({
  declarations: [AppComponent, SelectLevelPage, SelectQuestionCategoryPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({ hardwareBackButton: false }), CommonModule, AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
