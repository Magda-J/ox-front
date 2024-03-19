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
  
  // createFormObject = () => {
  //   const firstName = document.querySelector('#first-name') as HTMLInputElement
  //   const lastName = document.querySelector('#last-name') as HTMLInputElement
  //   const email = document.querySelector('#email') as HTMLInputElement
  //   const phone = document.querySelector('#phone') as HTMLInputElement
  //   const address = document.querySelector('#address') as HTMLInputElement
  //   const city = document.querySelector('#city') as HTMLInputElement
  //   const postcode = document.querySelector('#postcode') as HTMLInputElement

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

    // console.log(formData);

  // }

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const eventid = params['eventid'];
  //     const dateindex = params['dateindex'];
  //     // Now you can use eventid and dateindex as needed
  //     console.log('Event ID:', eventid);
  //     console.log('Date Index:', dateindex);
  //   });
  // }

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