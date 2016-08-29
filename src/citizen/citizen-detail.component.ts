import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Citizen } from './citizen';
import { CitizenService } from './citizen.service';

@Component({
    selector: 'citizen-detail',
    templateUrl: 'src/citizen/templates/citizen-detail.component.html'
})

export class CitizenDetailComponent implements OnInit {

    sub: any;
    navigated = false;
    citizen: Citizen;

    constructor(
        private citizenService: CitizenService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                console.log(params['id']);
                let id = +params['id'];
                this.navigated = true;
                this.citizenService.getCitizen(id)
                    //.subscribe(
                    //citizen => this.citizen = citizen
                    //);
                    .then(citizen => this.citizen = citizen);
            } else {
                this.navigated = false;
            }
        });
    }
}
