import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { DonationComponent } from './donation/donation.component';
import {PaymentService} from './payment/payment.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    DonationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
