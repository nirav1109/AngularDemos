import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ReverseAuthGuard } from './reverse-auth.guard';
import { StepperDemoComponent } from './components/stepper-demo/stepper-demo.component';
import { SidenavdemoComponent } from './components/sidenavdemo/sidenavdemo.component';
import { MaterialsDemosComponent } from './components/materials-demos/materials-demos.component';
import { BadgesdemoComponent } from './components/badgesdemo/badgesdemo.component';
import { ProgresspinnerComponent } from './components/progresspinner/progresspinner.component';
import { CardDemoComponent } from './components/card-demo/card-demo.component';
import { GridDemoComponent } from './components/grid-demo/grid-demo.component';
import { ChipdemoComponent } from './components/chipdemo/chipdemo.component';
import { VirtualscrollingdemoComponent } from './components/virtualscrollingdemo/virtualscrollingdemo.component';
import { AutocompletedemoComponent } from './components/autocompletedemo/autocompletedemo.component';
import { ExpansionpaneldemoComponent } from './components/expansionpaneldemo/expansionpaneldemo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomecoponentsComponent } from "./components/customecoponents/customecoponents.component";
/* const routes: Routes = [
  { path : '', redirectTo:'signup', pathMatch:'full'},
  { path : 'signup', component : SignupComponent,canActivate:[ReverseAuthGuard] },
  { path : 'login', component : LoginComponent,canActivate:[ReverseAuthGuard] },
  { path : 'profile', component : ProfileComponent,canActivate:[AuthGuard] },
  { path : 'dashboard', component : DashboardComponent, canActivate:[AuthGuard]},
  { path : 'users', component : UsersComponent, canActivate:[AuthGuard] },
  { path : 'signupu-with-stepper', component : StepperDemoComponent},
  { path : 'materials', component : MaterialsDemosComponent},
  { path : 'sidenav', component : SidenavdemoComponent},
  { path : 'badges', component : BadgesdemoComponent},
  { path : 'spinner', component : ProgresspinnerComponent},
  { path : 'card', component : CardDemoComponent},
  { path : 'grid', component : GridDemoComponent},
  { path : 'chip', component : ChipdemoComponent},
  { path : 'virtual-scroll', component : VirtualscrollingdemoComponent},
  { path : 'autocomplete', component : AutocompletedemoComponent},
  { path : 'expansion-panel', component : ExpansionpaneldemoComponent},
  { path : 'customcomponents', component : CustomecoponentsComponent},
  { path : '**', component : PageNotFoundComponent},
]; */
const routes: Routes = [
  { path : '', redirectTo:'signup', pathMatch:'full'},
  { path : 'signup', component : SignupComponent },
  { path : 'login', component : LoginComponent},
  { path : 'profile', component : ProfileComponent },
  { path : 'dashboard', component : DashboardComponent},
  { path : 'users', component : UsersComponent },
  { path : 'signupu-with-stepper', component : StepperDemoComponent},
  { path : 'materials', component : MaterialsDemosComponent},
  { path : 'sidenav', component : SidenavdemoComponent},
  { path : 'badges', component : BadgesdemoComponent},
  { path : 'spinner', component : ProgresspinnerComponent},
  { path : 'card', component : CardDemoComponent},
  { path : 'grid', component : GridDemoComponent},
  { path : 'chip', component : ChipdemoComponent},
  { path : 'virtual-scroll', component : VirtualscrollingdemoComponent},
  { path : 'autocomplete', component : AutocompletedemoComponent},
  { path : 'expansion-panel', component : ExpansionpaneldemoComponent},
  { path : 'customcomponents', component : CustomecoponentsComponent},
  { path : '**', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
