import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import { Citizen } from '../citizen/citizen';

@Component({
    selector: 'recover-form',
    templateUrl: 'app/auth/templates/recover.component.html',
})

export class RecoverComponent {

    //@Input() user: User;

    title = 'Recuperar Constraseña';

    // FIXME: ¿Should signup compontent has its own signup model
    // to match the specific signature which is consumed by the
    // form?
    user = new Citizen('', 1, '', '', '', '', '', '');

    error: any;

    constructor(private authService: AuthService) { }

    submitted = false;

    //get diagnostic() { return JSON.stringify(this.citizen); }
}

