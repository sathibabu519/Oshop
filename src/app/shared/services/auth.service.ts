import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'shared/models/app-user.model';
import { UserService } from 'shared/services/user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { ExceptionService } from 'app/core/exception.service';
import { SpinnerService } from 'app/core/spinner/spinner.service';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private exceptionService: ExceptionService,
    private spinner: SpinnerService
  ) {
    this.user$ = afAuth.authState;
  }

  login() {

    console.log("Login");
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl)

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(() => {
      console.log('signedin');

    }).catch((error) => {
      this.exceptionService.catchBadResponse(error);
    });

  }

  logout() {
    console.log("Logout");
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) return this.userService.get(user.uid);

        return Observable.of(null);
      });
  }

}
