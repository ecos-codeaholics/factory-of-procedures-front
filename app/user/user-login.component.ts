import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'user-login',
    template: '<user-login>{{title}}</user-login>',
})

export class UserLoginComponent {
    title = 'Acceso de usuario';
}
