
export class API_URL {

    //Servidor Uniandes
    //public  static serverPort:string = 'http://172.24.99.149:8082/';
    
    // LOCAL
     public  static serverPort:string = 'http://127.0.0.1:4567/';

    public static get FUNCTIONARIES(): string { return API_URL.serverPort + 'funcionarios/'; }
    public static get SESSIONS(): string { return API_URL.serverPort + 'sessions/'; }
    public static get CITIZENS(): string { return API_URL.serverPort + 'citizens/'; }

}
