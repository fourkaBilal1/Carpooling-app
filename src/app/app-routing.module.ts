import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { OfferComponent } from './offer/offer.component';
import { DemandComponent } from './demand/demand.component';
import { ListOffersComponent } from './list-offers/list-offers.component'
import { OneOfferComponent } from './one-offer/one-offer.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'logout', component:LogoutComponent},
  {path:'offer', component:OfferComponent},
  {path:'listOffers', component:ListOffersComponent},
  {path:'listOffers/result', component:OneOfferComponent},
  {path:'demand', component:DemandComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
