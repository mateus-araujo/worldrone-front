import { HttpModule } from '@angular/http';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error-component/error.component';
import { AlugaDroneService } from './services/aluga-drone.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    FormDebugComponent,
    ErrorComponent
  ],
  exports: [
    FormDebugComponent,
    ErrorComponent
  ]
})
export class CompartilhadoModule { }
