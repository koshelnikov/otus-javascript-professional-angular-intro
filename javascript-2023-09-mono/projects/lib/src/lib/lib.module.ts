import { NgModule } from '@angular/core';
import { LibComponent } from './lib.component';
import { HelloComponent } from './hello/hello.component';



@NgModule({
  declarations: [
    LibComponent,
    HelloComponent
  ],
  imports: [
  ],
  exports: [
    LibComponent
  ]
})
export class LibModule { }
