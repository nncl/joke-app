import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Form, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SearchItem } from '../models/search-item';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-cors',
    templateUrl: './cors.component.html',
    styleUrls: ['./cors.component.scss'],
    providers: [SearchService]
})
export class CorsComponent implements OnInit {
    form: Form;
    loading: boolean = false;
    // results: SearchItem[];
    results: Observable<SearchItem[]>;
    searchField: FormControl;

    constructor(private itunes: SearchService) {
    }

    ngOnInit() {
        this.searchField = new FormControl();
        this.results = this.searchField
            .valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .do(() => this.loading = true)
            .switchMap(term => this.itunes.search(term))
            .do(() => this.loading = false);

        // .subscribe(item => console.log(item)); because of async pipe we
        // don't have to sub/unsubscribe anymore
    }

    doSearch(term: string) {
        this.loading = true;

        // this.itunes.search(term).subscribe((data) => {
        //     this.loading = false;
        //     this.results = data;
        // });

        this.results = this.itunes.search(term);
    }

}
