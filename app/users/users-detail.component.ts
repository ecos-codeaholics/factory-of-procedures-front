import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/templates/users-detail.component.html'
})

export class UsersDetailComponent implements OnInit {

    sub: any;
    navigated = false;
    user: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                console.log(params['id']);
                let id = +params['id'];
                this.navigated = true;
                this.userService.getUser(id)
                    //.subscribe(
                    //user => this.user = user
                    //);
                    .then(user => this.user = user);
            } else {
                this.navigated = false;
            }
        });
    }
}
