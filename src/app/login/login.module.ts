import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule, CheckboxModule, DialogModule, InputTextModule, FieldsetModule, GrowlModule, PanelModule } from 'primeng/primeng';
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

    ButtonModule,
    CheckboxModule,
    DialogModule,
    InputTextModule,
    FieldsetModule,
    GrowlModule,
    PanelModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
