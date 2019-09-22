import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule as NgCommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CommonComponentsModule } from './common-components/module';
import { CommonPipesModule } from './pipes/module';

const COMMON_MODULES = [
  HttpClientModule,
  NgCommonModule,
  IonicModule,
  FormsModule,
  CommonComponentsModule,
  CommonPipesModule,
];

@NgModule({
  exports: COMMON_MODULES,
})
export class CommonModule {}
