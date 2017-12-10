import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import {DonationComponent} from './donation/donation.component';

const routes: Routes = [
  { path: '', component: DonationComponent },
  { path: 'payment/:donationId', component: PaymentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
