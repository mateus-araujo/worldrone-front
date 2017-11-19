import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {
  PanelModule, GrowlModule, ButtonModule, SplitButtonModule, TabViewModule,
  CodeHighlighterModule, DialogModule, InputTextModule, InputMaskModule, InputTextareaModule
} from 'primeng/primeng';

import { HomeClienteComponent } from './cliente/home-cliente.component';
import { HomeAdminComponent } from './admin/home-admin.component';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule,
    ReactiveFormsModule,
    FormsModule,

    PanelModule,
    GrowlModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    DialogModule,
    InputTextModule,
    InputMaskModule
  ],
  declarations: [HomeComponent, HomeClienteComponent, HomeAdminComponent]
})
export class HomeModule { }
