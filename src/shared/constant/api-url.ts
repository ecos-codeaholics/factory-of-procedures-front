import { ConfigService } from '../../config/config.service';
import { Injectable } from '@angular/core';

@Injectable()
export class API_URL {

    //Servidor Uniandes
   /* public  static serverPort:string = 'http://172.24.99.149:8082/';
    
    // LOCAL
    // public  static serverPort:string = 'http://127.0.0.1:4567/';

    public static get FUNCTIONARIES(): string { return API_URL.serverPort + 'funcionarios/'; }
    public static get SESSIONS(): string { return API_URL.serverPort + 'sessions/'; }
    public static get CITIZENS(): string { return API_URL.serverPort + 'citizens/'; }
    public static get PROCEDURES(): string { return 'src/procedure/procedures.json'; }
*/
    public baseUrl: string;
    public port: string;

    constructor(config: ConfigService) {
        console.log(config.get('baseUrl'));
        console.log(config.get('port'));


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
    PROCEDURES() {
        return '/src/procedure/procedures.json';
    }
}
