import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {
    public env: Object;
    public config: Object;


    constructor(
        private http: Http
    ) { }

    load(): Promise<Object> {

        return new Promise((resolve, reject) => {

            this.http.get('src/config/env.json')
                .map(res => res.json())
                .subscribe((env_data) => {

                    this.env = env_data;

                    this.http.get('src/config/' + env_data.env + '.json')
                        .map(res => res.json())

                        .catch((error: any) => {
                            console.error(error);
                            return Observable.throw(error.json().error || 'Server error');
                        })
                        .subscribe((data) => {
                            this.config = data;
                            resolve(true);
                        });
                });
        });
    }

    getEnv() {
        console.log(this.env['env']);
        return this.env['env'];
    }

    get(key: string): string {

        return this.config[key];
    }
}
