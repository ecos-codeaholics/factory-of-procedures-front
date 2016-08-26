/**
 * Originally called auth.guard.ts its a service contributed 
 * by @chenkie
 * @see https://github.com/auth0-blog/angular2-authentication-sample/blob/master/src/common/auth.guard.ts
 */

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        if (tokenNotExpired()) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}
