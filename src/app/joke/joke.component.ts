import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Joke} from '../models/joke';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
    @Input('joke') data: Joke;
    @Output() jokeDeleted = new EventEmitter<Joke>();

    ngOnInit() {
    }

    deleteItem() {
        this.jokeDeleted.emit(this.data);
    }

}
