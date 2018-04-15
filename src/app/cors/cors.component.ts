import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { SearchItem } from '../models/search-item';

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

    constructor(private itunes: SearchService) {
    }

    ngOnInit() {
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
