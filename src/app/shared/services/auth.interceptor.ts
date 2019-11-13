import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SentryService } from "./sentry.service";
import * as Sentry from "@sentry/browser";


@Injectable()

// export class NoopInterceptor implements HttpInterceptor {
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//       const changedReq = req.clone({headers: req.headers.set('My-Header', 'MyHeaderValue')});
//       console.log('change request',changedReq);
//       return next.handle(changedReq);
//     }
//   }


export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private sentryservice : SentryService){}
    //below function will be called for all the http
    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {

        // to update the request parameter
        const updateRequest = request.clone({
           // headers: request.headers.set("Authorization", "")
           setHeaders : {
               "Authorization": 'hgfhdggf',
               "Content-Type" : 'gfhfggfdfg'
           }
        });
        console.log("before making api call", updateRequest);

        return next.handle(updateRequest).do(

            event => {
                  if(event instanceof HttpResponse) {
                    Sentry.captureException(event)
                      console.log('api call success :', event);
                  }
            },
            error => {
                if(error instanceof HttpErrorResponse){
                    //Sentry.captureException(error)
                    console.log('api call error :', error);
                }
            }
            );
    }
}