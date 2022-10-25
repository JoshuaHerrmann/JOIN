import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterModule } from './_modules/header-footer/header-footer.module';
import { LoginPageModule } from './_modules/login-page/login-page.module';
import { LogoutPageModule } from './_modules/logout-page/logout-page.module';
import { MainPageModule } from './_modules/main-page/main-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { LogoutButtonModule } from './_modules/logout-button/logout-button.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderFooterModule,
    MainPageModule,
    LoginPageModule,
    LogoutPageModule,
    BrowserAnimationsModule,
    FormsModule,
    LogoutButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    /* provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
     */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
