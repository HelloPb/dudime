import { UserCultureService } from './dev/content/features/shared/services/culture/user-culture/user-culture.service';
import { HttpModule } from '@angular/http';
import { HttpWrap } from './dev/content/features/shared/services/http/http-wrap.service';
import {
  CountryCultureService,
} from './dev/content/features/shared/services/culture/country-culture/country-culture.service';
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
import { PageNotFoundComponent } from './dev/page-not-found/page-not-found.component';
import { LogoutComponent } from './dev/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HttpWrap, CanActivateGuardService, AuthService, YesNoDialogService, CountryCultureService, UserCultureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
