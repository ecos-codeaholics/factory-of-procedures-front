/**
 * Originally called auth.guard.ts its a service contributed 
 * by @chenkie
 * @see https://github.com/auth0-blog/angular2-authentication-sample/blob/master/src/common/auth.guard.ts
 */

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { JwtHelperService } from '../shared/jwt-helper.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    private token: string;
    //private user: string;

    constructor(
        private router: Router,
        private jwtHelperService: JwtHelperService
    ) {
        this.token = localStorage.getItem('id_token');
        //this.user = this.jwtHelperService.tokenDecode()['jti'];
        //console.log(user);
    }

    canActivate() {
        if (tokenNotExpired()) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }

    isAuth() {

        return !!this.token;
    }

    // Temporary here, should be on auth service
    getUser() {

        return "foo bar baz"
    }
}
