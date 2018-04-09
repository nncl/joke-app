import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    }

    doGETAsPromiseError() {
        console.log('doGETAsPromiseError');
    }

    doGETAsObservableError() {
        console.log('doGETAsObservableError');
    }

    doGETWithHeaders() {
        console.log('doGETWithHeaders');
    }

}
