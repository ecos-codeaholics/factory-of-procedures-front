import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
	selector: 'user-form',
	templateUrl: 'app/templates/user-form.component.html'
})

export class UserFormComponent {
       title = 'Registro de usuario';

       roles = ['Administrador', 'Funcionario', 'Ciudadano'];

       submitted = false;

       onSubmit() { this.submitted = true; }

       //get diagnostic() { return JSON.stringify(this.model); }
}