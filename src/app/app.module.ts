import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpScreenComponent } from './screens/sign-up-screen/sign-up-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpScreenComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
