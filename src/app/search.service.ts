import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
    apiRoot: string = 'https://itunes.apple.com/search';
    results: Object[];
    loading: boolean;

    constructor(private httpClient: HttpClient) {
        this.results = [];
        this.loading = false;
    }

    search(term: string) {
        const promise = new Promise((resolve, reject) => {
            this.httpClient.get(`${this.apiRoot}?term=${term}&media=music&limit=20`)
                .toPromise()
                .then(
                    res => {
                        this.results = res.results;
                        resolve();
                    },
                    msg => {
                        reject();
                    }
                );
        });

        return promise;
    }
}
