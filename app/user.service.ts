import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
       getUsers() {
       		  return Promise.resolve(USERS);
       }
}