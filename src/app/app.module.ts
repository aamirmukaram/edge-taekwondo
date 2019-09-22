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
import { SelectTestTypePage } from './select-test-type/select-test-type.page';

@NgModule({
  declarations: [AppComponent, SelectLevelPage, SelectTestTypePage],
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
