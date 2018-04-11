import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Form } from '@angular/forms';

@Component({
    selector: 'app-cors',
    templateUrl: './cors.component.html',
    styleUrls: ['./cors.component.scss'],
    providers: [SearchService]
})
export class CorsComponent implements OnInit {
    form: Form;
    loading: boolean = false;

    constructor(private itunes: SearchService) {
    }

    ngOnInit() {
    }

    doSearch(term: string) {
        this.loading = true;
        this.itunes.search(term).then(() => this.loading = false);
    }

}
