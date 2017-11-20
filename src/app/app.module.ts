import { AuthGuard } from './compartilhado/guard/auth.guard';
import { GlobalService } from './compartilhado/services/global.service';
import { CadastroModule } from './cadastro/cadastro.module';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    HomeModule,
    LoginModule,
    CadastroModule,
    NavBarModule,
    RouterModule
  ],
  providers: [GlobalService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
