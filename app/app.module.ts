import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    EventRouteActivator
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { AppRoutes } from './routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        CreateEventComponent,
        NavBarComponent,
        EventDetailsComponent,
        Error404Component
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
    ]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('Are you sure you want to cancel ? ');
    else
        return false;
}