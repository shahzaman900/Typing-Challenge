import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

    // text = new FormControl();

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.text.valueChanges.subscribe((value: string) => {
        //     this.inputText = value;
        // });
    }

    onInput(event: any) {
        const input = event.target.value;
        // this.inputText = input === '' ? null : input;
        this.inputText = input;
        console.log(this.inputText);
        //     // if (this.inputText === this.title) {
        //     //     this.solved = true;
        //     // }
    }

    compare(randomNumber: string, inputText: string) {
        if (!inputText) {
            return 'pending';
        }
        return randomNumber === inputText ? 'correct' : 'wrong';
    }
}
