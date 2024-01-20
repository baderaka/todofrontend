import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   const localtoken=localStorage.getItem('token');
   request=request.clone({headers:request.headers.set('Authorization','bearer'+ " "+localtoken)});
    return next.handle(request);
  }
}
