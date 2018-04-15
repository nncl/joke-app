import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchItem } from './models/search-item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    apiRoot: string = 'https://itunes.apple.com/search';
    results: SearchItem[];
    loading: boolean;

    constructor(private httpClient: HttpClient) {
        this.results = [];
        this.loading = false;
    }

    search(term: string): Observable<SearchItem[]> {
        return this.httpClient.get(`${this.apiRoot}?term=${term}&media=music&limit=20`)
            .map(res => {
                const results = res['results'].map(item => {
                    return new SearchItem(
                        item.trackName,
                        item.artistName,
                        item.trackViewUrl,
                        item.artworkUrl30,
                        item.artistId
                    );
                });
                return results;
            });
    }
}
