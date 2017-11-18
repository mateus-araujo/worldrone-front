import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {
  PanelModule, GrowlModule, ButtonModule, SplitButtonModule, TabViewModule,
  CodeHighlighterModule, DialogModule, InputTextModule, InputMaskModule, InputTextareaModule
} from 'primeng/primeng';

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
  declarations: [HomeComponent]
})
export class HomeModule { }
