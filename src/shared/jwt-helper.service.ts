import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class JwtHelperService {

    token = localStorage.getItem('id_token');

    constructor(
        public jwtHelper: JwtHelper
    ) { }

    tokenDecode() {

        if (!this.token) {

            return "unathorized";
        } else {

            return this.jwtHelper.decodeToken(this.token);
        }
    }

    tokenExpirationDate() {

        return this.jwtHelper.getTokenExpirationDate(this.token);
    }

    tokenExpired() {

        return this.jwtHelper.isTokenExpired(this.token);
    }


}
