import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {
  PanelModule, GrowlModule, ButtonModule, SplitButtonModule, TabViewModule,
  CodeHighlighterModule, DialogModule, InputTextModule, InputMaskModule, InputTextareaModule, FileUploadModule
} from 'primeng/primeng';

import { HomeClienteComponent } from './cliente/home-cliente.component';
import { HomeAdminComponent } from './admin/home-admin.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ShowDronesComponent } from './show-drones/show-drones.component';

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
    InputMaskModule,
    FileUploadModule
  ],
  declarations: [HomeComponent, HomeClienteComponent, HomeAdminComponent, ShowUsersComponent, ShowDronesComponent]
})
export class HomeModule { }
