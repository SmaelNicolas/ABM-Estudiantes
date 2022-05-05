import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarLateralComponent } from './core/components/navbar-lateral/navbar-lateral.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModulesModule } from './core/material/material-modules.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from './core/components/login/login.component';
import { LoadingScreenComponent } from './core/components/loading-screen/loading-screen.component';
import { HomeComponent } from './core/components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarLateralComponent,
    ToolbarComponent,
    HomeComponent,
    LoadingScreenComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModulesModule,
    AppRoutingModule,
    SweetAlert2Module,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
