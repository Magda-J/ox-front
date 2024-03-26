
export interface ParticipantInterface {
    _id: string,
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: string, 
    address: string, 
    city: string, 
    postcode: string
  }

  export interface UserData {
    username: string;
    password: string;
    
    
  }


  export interface UserProfileData {
    bio: string;
    profilePic: string;
  }

// import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

// export interface Options {
//   headers?:
//     | HttpHeaders
//     | {
//         [header: string]: string | string[];
//       };
//   observe?: 'body';
//   context?: HttpContext;
//   params?:
//     | HttpParams
//     | {
//         [param: string]:
//           | string
//           | number
//           | boolean
//           | ReadonlyArray<string | number | boolean>;
//       };
//   reportProgress?: boolean;
//   responseType?: 'json';
//   withCredentials?: boolean;
//   transferCache?:
//     | {
//         includeHeaders?: string[];
//       }
//     | boolean;
// }

// export interface Event {
//     eventName: string,
//     eventImg: string,
//     hostName: string,
//     ratings: number,
//     price: number,
//     hostBio: string,
//     hostProfilePic: string,
//     hostProfileLink: string,
//     description: string,

// }

// export interface PaginationParams { 
//     [key: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
//     page: number;
//     perPage: number;
// }
