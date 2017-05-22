import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
    <h1>New Event</h1>
    <div class="col-md-6">
    <h3>[Create Form goes Here ]</h3>
    <br/>
    <br/>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" (click)="cancel()" class="btn btn-default">Canel</button>
    </div>
    `
})

export class CreateEventComponent {
    constructor(private router: Router) {

    }
    cancel() {
        this.router.navigate(["/events"]);
    }
}