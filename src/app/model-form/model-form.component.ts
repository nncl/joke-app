import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-model-form',
    templateUrl: './model-form.component.html',
    styleUrls: ['./model-form.component.scss']
})
export class ModelFormComponent implements OnInit {

    myForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    language: FormControl;

    // langs: Array<string> = [];
    langs: string[] = [
        'English',
        'French',
        'Portuguese'
    ];

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required)
        this.email = new FormControl('', [
            Validators.required, Validators.email
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
        this.language = new FormControl('');
    }

    createForm() {
        this.myForm = new FormGroup({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName
            }),
            email: this.email,
            password: this.password,
            language: this.language
        });
    }

    onSubmit() {
        if (this.myForm.valid) {
            console.log('Valid form', this.myForm.value);
            this.myForm.reset();
        }
    }

}
