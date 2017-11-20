import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule, CheckboxModule, DialogModule, InputTextModule, FieldsetModule, GrowlModule, Fieldset } from 'primeng/primeng';
import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompartilhadoModule,
    LoginRoutingModule,

    ButtonModule,
    CheckboxModule,
    DialogModule,
    InputTextModule,
    FieldsetModule,
    GrowlModule,
    FieldsetModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
