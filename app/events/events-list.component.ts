import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events </h1>
        <hr>
        <div class="row">
            <div class = "col-md-5" *ngFor="let event1 of events" >
                <event-thumbnail (click)=eventClicked(event1?.name) [event]="event1" ></event-thumbnail>
            </div>
        </div>
    </div>`
})
export class EventsListComponent implements OnInit {
    events: any;

    constructor(private eventService: EventService,
        private toastrService: ToastrService, private route: ActivatedRoute) {
    }
    eventClicked(eventName) {
        this.toastrService.showSuccess(eventName);
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
        //this.eventService.getEvents().subscribe((events) => this.events = events);
    }
}