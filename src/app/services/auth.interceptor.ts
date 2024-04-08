import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const myToken = localStorage.getItem('token');

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `${myToken}`,
    },
  });

  return next(clonedRequest);
};
