import {Component, OnInit} from '@angular/core';
import {Joke} from '../joke';

@Component({
    selector: 'app-joke-list',
    templateUrl: './joke-list.component.html',
    styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
    jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke('Question 1', 'Punchline 1'),
            new Joke('Question 2', 'Punchline 2'),
            new Joke('Question 3', 'Punchline 3')
        ];
    }

    ngOnInit() {
    }

    addJoke(joke) {
        this.jokes.unshift(joke);
    }

    deleteJoke(joke) {
        let indexToDelete = this.jokes.indexOf(joke);
        if (indexToDelete !== -1) {
            this.jokes.splice(indexToDelete,1);
        }
    }

}
