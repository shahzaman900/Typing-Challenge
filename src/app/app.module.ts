import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
