import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterModule } from './_modules/header-footer/header-footer.module';
import { LoginPageModule } from './_modules/login-page/login-page.module';
import { LogoutPageModule } from './_modules/logout-page/logout-page.module';
import { MainPageModule } from './_modules/main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderFooterModule,
    MainPageModule,
    LoginPageModule,
    LogoutPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
