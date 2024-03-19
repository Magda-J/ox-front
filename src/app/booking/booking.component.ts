import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GooglePayButtonModule } from '@google-pay/button-angular'
import { ParticipantInterface } from '../../types';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [GooglePayButtonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  buttonWidth = 240
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US'
    }
  }

  onLoadPaymentData(event: any) {
    console.log(event, "DATA");
    
  }
  
    formData: ParticipantInterface = {
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postcode: ''
    }

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  onClick(): void {

    console.log(this.formData);
    const eventid = this.route.snapshot.params['eventid']
    const dateindex = this.route.snapshot.params['dateindex']

    
    const apiUrl = `http://localhost:3000/events/${eventid}/${dateindex}`;

    this.http.post(apiUrl, this.formData)
    .subscribe({
      next: (response: any) => {
        console.log('Post successful', response);
        
        this.formData = {
          _id: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          postcode: ''
        };
      },
      error: (error: any) => {
        console.error('Error occurred', error);
       
      }
    });
}

  }