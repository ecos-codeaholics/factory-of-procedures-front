import { ConfigService } from '../../config/config.service';
import { Injectable } from '@angular/core';

@Injectable()
export class API_URL {

    public baseUrl: string;
    public port: string;

    constructor(config: ConfigService) {
        this.baseUrl = config.get('baseUrl');
        this.port = config.get('port');
    }

    FUNCTIONARIES() {
        return this.baseUrl + ':' + this.port + '/functionaries/';
    }

    AUTH() {
        return this.baseUrl + ':' + this.port + '/auth/';
    }

    LOGIN() {
        return this.baseUrl + ':' + this.port + '/auth/login/';
    }

    DOCUMENT() {
        return this.baseUrl + ':' + this.port + '/auth/upload/';
    }

    CITIZENS() {
        return this.baseUrl + ':' + this.port + '/citizens/';
    }

    ADMIN() {
        return this.baseUrl + ':' + this.port + '/admin/';
    }

    PROCEDURES() {
        return this.baseUrl + ':' + this.port + '/citizens/procedures/';
    }
}
