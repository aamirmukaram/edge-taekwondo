import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonComponentsModule } from './common-components/module';
import { CommonPipesModule } from './pipes/module';

const COMMON_MODULES = [
  HttpClientModule,
  CommonComponentsModule,
  CommonPipesModule,
];

@NgModule({
  exports: COMMON_MODULES,
})
export class CommonModule {}
