import { NgModule } from '@angular/core';

import { TimeoutRemoveClassDirective } from './timeout-remove-class.directive';


const COMPONENTS = [TimeoutRemoveClassDirective];

@NgModule({
  imports: [],
  declarations: COMPONENTS,
  exports: [COMPONENTS],
})
export class CommonComponentsModule {}
