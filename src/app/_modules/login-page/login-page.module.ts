import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { DialogResetPasswordComponent } from './dialog-reset-password/dialog-reset-password.component';
import { ResetsendComponent } from './resetsend/resetsend.component';
import { AuthguardComponent } from './authguard/authguard.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    LoginPageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LoginComponent,
    SignUpComponent,
    DialogResetPasswordComponent,
    ResetsendComponent,
    AuthguardComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
