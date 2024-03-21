import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const myToken = localStorage.getItem('token')
  console.log( "interceptor token",myToken)

  console.log("Original request URL:", req.url);
  console.log("Original request headers:", req.headers);

  const clonedRequest = req.clone({
   setHeaders: {
    Authorization: `${myToken}`
   }


  })
  
  console.log("Cloned request URL:", clonedRequest.url);
  console.log("Cloned request headers:", clonedRequest.headers);

  return next(clonedRequest);
};
