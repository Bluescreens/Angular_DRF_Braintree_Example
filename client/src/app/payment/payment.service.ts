import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PaymentService {

    constructor(private http: HttpClient) { }

  getClientToken(clientTokenURL: string): Observable<string> {
    return this.http
      .get(clientTokenURL, {responseType: 'text'})
      .map((response: any) => {
        return response;
      })
      .catch((error) => {
        console.log('ups');
        console.log(Observable.throw(error));
        return Observable.throw(error);
      });
  }

  checkout(checkoutURL: string, nonce: string, donationId: string): Observable<any> {
    console.log('ok');
    console.log(donationId);
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let params = {'payment_method_nonce': nonce, 'donation_id': donationId};
    return this.http
      .post(checkoutURL,
        {headers: headers, params: params}
      )
      .map((response: any) => {
        return response;
      })
      .catch((error) => {
        console.log('ups');
        console.log(Observable.throw(error));
        return Observable.throw(error);
      });
  }

}
