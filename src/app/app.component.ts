import { Component, Input, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    rendomText = faker.lorem.sentence();
    inputText = '';
    solved = false;

    ngOnInit(): void {
    }

    onInput(event: any) {
        const input = event.target.value;
        this.inputText = input;
    }

    compare(randomNumber: string, input: string) {
        if (!input) {
            return 'pending';
        }
        return randomNumber === input ? 'correct' : 'wrong';
    }
}
