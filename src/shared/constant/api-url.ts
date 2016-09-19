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
        return this.baseUrl + ':' + this.port + '/funcionarios/';
    }

    SESSIONS() {
        return this.baseUrl + ':' + this.port + '/sessions/';
    }

    CITIZENS() {
        return this.baseUrl + ':' + this.port + '/citizens/';
    }
}
