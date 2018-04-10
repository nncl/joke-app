import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-http',
    templateUrl: './http.component.html',
    styleUrls: ['./http.component.scss']

})
export class HttpComponent implements OnInit {
    apiRoot: string = 'http://httpbin.org';

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
    }

    doGET() {
        console.log('doGET');
        const url = `${this.apiRoot}/get`;
        const params = {page: '1', limit: '200'};
        this.httpClient.get(url, {params: params}).subscribe(res => console.log(res));
    }

    doPOST() {
        console.log('doPOST');
        const url = `${this.apiRoot}/post`;
        const params = {name: 'Caue', age: 23};
        this.httpClient.post(url, {params: params}).subscribe(res => console.log(res));
    }

    doPUT() {
        console.log('doPUT');
        const url = `${this.apiRoot}/put`;
        const params = {name: 'Caue', age: 23};
        this.httpClient.put(url, {params: params}).subscribe(res => console.log(res));
    }

    doDELETE() {
        console.log('doDELETE');
        const url = `${this.apiRoot}/delete`;
        const params = {page: '1', limit: '200'};
        this.httpClient.delete(url, {params: params}).subscribe(res => console.log(res));
    }

    doGETAsPromise() {
        console.log('doGETAsPromise');
        const url = `${this.apiRoot}/get`;
        const params = {page: '1', limit: '200'};
        this.httpClient.get(url, {params: params})
            .toPromise()
            .then(res => console.log(res));
        // .subscribe(res => console.log(res));
    }

    doGETAsPromiseError() {
        console.log('doGETAsPromiseError');
        const url = `${this.apiRoot}/post`;
        const params = {page: '1', limit: '200'};
        this.httpClient.get(url, {params: params})
            .subscribe(
                res => console.log(res),
                err => console.error(`Error: ${err.status} ${err.statusText}`)
            );
        /*.then(
            res => console.log(res),
            err => console.error(`Error: ${err.status} ${err.statusText}`)
        );*/
    }

    doGETAsObservableError() {
        console.log('doGETAsObservableError');
        const url = `${this.apiRoot}/post`;
        const params = {page: '1', limit: '200'};
        this.httpClient.get(url, {params: params})
            .toPromise()
            .then(res => console.log(res))
            .catch(err => console.error(`Error: ${err.status} ${err.statusText}`));
    }

    doGETWithHeaders() {
        console.log('doGETWithHeaders');
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        });
        // const headers = new HttpHeaders();
        // headers.set('Authorization', btoa('username:password'));

        const url = `${this.apiRoot}/get`;

        // TODO Add search as well
        this.httpClient.get(url, {headers: headers}).subscribe(
            res => console.log(res),
            msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );

        // this.httpClient.get(url, {params: {page: 1, limit: 200}, headers: {'Authorization' : btoa('username:password')}}).subscribe(
        //     res => console.log(res),
        //     msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        // );
    }

}
