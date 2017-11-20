import { CadastroRoutingModule } from './cadastro-routing.module';
import { InputTextModule, GrowlModule, PasswordModule, ConfirmDialogModule, FieldsetModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule,
    FormsModule,
    ReactiveFormsModule,
    CadastroRoutingModule,

    InputTextModule,
    GrowlModule,
    PasswordModule,
    ConfirmDialogModule,
    FieldsetModule
  ],
  declarations: [CadastroComponent]
})
export class CadastroModule { }
