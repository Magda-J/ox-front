import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const myToken = localStorage.getItem('token')
  console.log( "interceptor token",myToken)



  const clonedRequest = req.clone({
   setHeaders: {
    Authorization: `${myToken}`
   }


  })
  
  

  return next(clonedRequest);
};
