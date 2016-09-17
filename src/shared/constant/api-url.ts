
export class API_URL {

    //Servidor Uniandes
    //public  static serverPort:string = 'http://172.24.99.149:8082/';
    
    // LOCAL
     public  static serverPort:string = 'http://157.253.221.157:4567/';

    public static get FUNCTIONARIES(): string { return API_URL.serverPort + 'functionaries/'; }
    public static get AUTH(): string { return API_URL.serverPort + 'auth/'; }
    public static get CITIZENS(): string { return API_URL.serverPort + 'citizens/'; }

}
