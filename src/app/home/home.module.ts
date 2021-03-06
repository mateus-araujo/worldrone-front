import { HomeRoutingModule } from './home-routing.module';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {
  PanelModule, GrowlModule, ButtonModule, SplitButtonModule, TabViewModule,
  CodeHighlighterModule, DialogModule, InputTextModule, InputMaskModule,
  InputTextareaModule, FileUploadModule, DataListModule, ConfirmDialogModule, DropdownModule
} from 'primeng/primeng';

import { HomeClienteComponent } from './cliente/home-cliente.component';
import { HomeAdminComponent } from './admin/home-admin.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ShowDronesComponent } from './show-drones/show-drones.component';
import { ShowAlugaDroneComponent } from './show-aluga-drone/show-aluga-drone.component';

@NgModule({
  imports: [
    CommonModule,
    CompartilhadoModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule,

    PanelModule,
    GrowlModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    CodeHighlighterModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    FileUploadModule,
    DataListModule,
    ConfirmDialogModule,
    DropdownModule
  ],
  declarations: [HomeComponent, HomeClienteComponent, HomeAdminComponent, ShowUsersComponent, ShowDronesComponent, ShowAlugaDroneComponent]
})
export class HomeModule { }
