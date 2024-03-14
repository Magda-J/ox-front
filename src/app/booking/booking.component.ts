import { Component } from '@angular/core';
import { GooglePayButtonModule } from '@google-pay/button-angular'

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [GooglePayButtonModule],
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
  
  createFormObject = () => {
    // const googleButton = document.querySelector('google-pay-button')
    const firstName = document.querySelector('#first-name') as HTMLInputElement
    const lastName = document.querySelector('#last-name') as HTMLInputElement
    const email = document.querySelector('#email') as HTMLInputElement
    const phone = document.querySelector('#phone') as HTMLInputElement
    const address = document.querySelector('#address') as HTMLInputElement
    const city = document.querySelector('#city') as HTMLInputElement
    const postcode = document.querySelector('#postcode') as HTMLInputElement

    interface ParticipantInterface {
      firstName: string, 
      lastName: string, 
      email: string, 
      phone: string, 
      address: string, 
      city: string, 
      postcode: string
    }

    const formData: ParticipantInterface = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      city: city.value,
      postcode: postcode.value
    }

    console.log(formData);
    

  }
}
