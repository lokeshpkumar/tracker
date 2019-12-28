import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RegistrationService {

    constructor(private http: HttpClient) {
    }

    register(user: User) {
        return this.http.post<any>(environment.apiUrl + "/users/register", { user })
            .pipe(map(user => {
                console.log("The reigstration process went through ...");
                return user;
            }));
    }
}