import { YesNoDialogService } from './dev/content/features/shared/services/dialog/yesno/yes-no-dialog.service';
import { AuthService } from './dev/content/features/shared/services/auth/authservice/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentModule } from './dev/content/content.module';
import { LoginComponent } from './dev/login/login.component';
import { RegisterComponent } from './dev/register/register.component';
import { CanActivateGuardService } from './dev/content/features/shared/services/auth/can-activate-guard/can-activate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ContentModule,
    AppRoutingModule
  ],
  providers: [CanActivateGuardService, AuthService, YesNoDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
