import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import {CookieService} from 'ngx-cookie-service';
import { AuthGuard } from './auth.guard';
import { DialogComponent } from './components/dialog/dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DeleteConfirmDialogComponent } from './components/delete-confirm-dialog/delete-confirm-dialog.component';
import { StepperDemoComponent } from './components/stepper-demo/stepper-demo.component';
import { SidenavdemoComponent } from './components/sidenavdemo/sidenavdemo.component';
import { MaterialsDemosComponent } from './components/materials-demos/materials-demos.component';
import { BadgesdemoComponent } from './components/badgesdemo/badgesdemo.component';
import { ProgresspinnerComponent } from './components/progresspinner/progresspinner.component';
import { CardDemoComponent } from './components/card-demo/card-demo.component';
import { GridDemoComponent } from './components/grid-demo/grid-demo.component';
import { VirtualscrollingdemoComponent } from './components/virtualscrollingdemo/virtualscrollingdemo.component';
import { ChipdemoComponent } from './components/chipdemo/chipdemo.component';
import { AutocompletedemoComponent } from './components/autocompletedemo/autocompletedemo.component';
import { ExpansionpaneldemoComponent } from './components/expansionpaneldemo/expansionpaneldemo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { CustomecoponentsComponent } from './components/customecoponents/customecoponents.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UsersComponent,
    DialogComponent,
    ConfirmDialogComponent,
    NavigationComponent,
    DeleteConfirmDialogComponent,
    ProfileComponent,
    StepperDemoComponent,
    SidenavdemoComponent,
    MaterialsDemosComponent,
    BadgesdemoComponent,
    ProgresspinnerComponent,
    CardDemoComponent,
    GridDemoComponent,
    VirtualscrollingdemoComponent,
    ChipdemoComponent,
    AutocompletedemoComponent,
    ExpansionpaneldemoComponent,
    PageNotFoundComponent,
    CustomecoponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CookieService, AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
