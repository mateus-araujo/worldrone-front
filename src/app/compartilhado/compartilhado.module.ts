import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error-component/error.component';

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
  ],
  providers: [
    UserService]
})
export class CompartilhadoModule { }
