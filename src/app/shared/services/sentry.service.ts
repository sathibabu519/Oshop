import { ErrorHandler, Injectable } from "@angular/core";



import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://4dca2af4a8fa4bdbbb31d44f1d96893e@sentry.io/1389623"
});

Sentry.configureScope((scope)=> {
  scope.setUser({'email:':'sathibabu519@gmail.com'});
})

@Injectable()
export class SentryService implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

