import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-model-form',
    templateUrl: './model-form.component.html',
    styleUrls: ['./model-form.component.scss']
})
export class ModelFormComponent implements OnInit {
    myForm: FormGroup;

    // langs: Array<string> = [];
    langs: string[] = [
        'English',
        'Portuguese',
        'French'
    ];

    constructor() {
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormGroup({
                firstName: new FormControl(),
                lastName: new FormControl()
            }),
            email: new FormControl(),
            password: new FormControl(),
            language: new FormControl()
        });
    }

}
