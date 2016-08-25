import {Inject, Injectable} from '@angular/core'
import {Http, RequestOptionsArgs, Headers} from '@angular/http' 
import {Observable} from 'rxjs/Observable'
import {CONFIG_TOKEN, Configuration} from '../config/configuration'

@Injectable()
export class ChuckService {

    constructor(
        private http:Http,
        @Inject(CONFIG_TOKEN) private config:Configuration){}

    getQuote(): Observable<string>{
        let token: string = localStorage.getItem('token')
        let headers: Headers = new Headers()
        headers.append(`Authorization`, 'Bearer ' + token)
        let opts: RequestOptionsArgs = {
            headers: headers
        }
        return (
            this.http.get(this.config.api + '/api/protected/random-quote', opts)
                .map(response => response.text()))
    }    


    auth(): Observable<string> {
        let creds: string = 'username=andy2&password=pw' 
        let headers: Headers = new Headers()
        headers.append(`Content-Type`,
        'application/x-www-form-urlencoded')
        let opts: RequestOptionsArgs = {
            headers: headers
        }
        return (
            this.http.post(this.config.api + '/users', creds, opts)
            .map(response => response.json().id_token)
    }

}