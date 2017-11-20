import { AuthGuard } from './guard/auth.guard';
import { GlobalService } from './services/global.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { DroneService } from './services/drone.service';
import { UserService } from './services/user.service';
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
  ],
  providers: [
    UserService, DroneService, AlugaDroneService, ConfirmationService]
})
export class CompartilhadoModule { }
