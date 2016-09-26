import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class JwtHelperService {

    constructor(

        public jwtHelper: JwtHelper
    ) { }

    tokenDecode() {

        let token = localStorage.getItem('id_token');

        if (!token) {

            return "unathorized";
        } else {

            return this.jwtHelper.decodeToken(token);
        }
    }

    tokenExpirationDate() {

        let token = localStorage.getItem('id_token');

        return this.jwtHelper.getTokenExpirationDate(token);
    }

    tokenExpired() {

        let token = localStorage.getItem('id_token');

        return this.jwtHelper.isTokenExpired(token);
    }
}
