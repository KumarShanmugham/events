import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;
    loginUser(userName: string, password: string) {
        this.currentUser = {
            userName: 'Kumar',
            firstName: 'Kumaravadivel',
            lastName: 'Shanmugham',
            id: 1
        };
    }
    isAuthenticated() {
        return !!this.currentUser;
    }

    updateUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}