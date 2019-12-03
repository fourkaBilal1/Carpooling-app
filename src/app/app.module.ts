import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout/logout.component';
import { UserService } from './user.service'
import { AuthGuard } from './auth.guard';
import { DemandService } from './demand.service';
import { OfferComponent } from './offer/offer.component';
import { OfferService } from './offer.service';
import { ListOffersComponent } from './list-offers/list-offers.component';
import { OneOfferComponent } from './one-offer/one-offer.component';
import { DemandComponent } from './demand/demand.component'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    OfferComponent,
    ListOffersComponent,
    OneOfferComponent,
    DemandComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,UserService,DemandService,OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
