import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TimeoutRemoveClassDirective } from './timeout-remove-class.directive';


const COMPONENTS = [TimeoutRemoveClassDirective];

@NgModule({
  imports: [],
  declarations: COMPONENTS,
  exports: [NgCommonModule, IonicModule, COMPONENTS],
})
export class CommonComponentsModule {}
