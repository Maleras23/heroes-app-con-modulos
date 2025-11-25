import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutignModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPage } from './pages/register-page/register-page';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPage,

  ],
  imports: [
    CommonModule,
    AuthRoutignModule
  ]
})
export class AuthModule { }
