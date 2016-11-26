import {Component, OnInit} from '@angular/core';
import {CitizenService} from './citizen.service';
import {Citizen} from './citizen';
import {Dependency} from './dependency';
import { Router } from '@angular/router';

declare var jQuery: any;


@Component({
    selector: 'citizen-functionary',
    templateUrl: 'src/citizen/templates/citizen-functionary.component.html',
    providers: [CitizenService]
})

export class CitizenFunctionaryComponent implements OnInit {

    title = 'Seleccione el nuevo funcionario';
    citizen: any;
    citizens: Citizen[];
    dependency: any;
    dependencies: Dependency[];
    functionary: any = {'citizen':{},'dependency':{}};
    error: any;
    errorMessage: string;
    private msgResponse: any = {};

    constructor(private citizenService: CitizenService,
                private router: Router) {
    }

    getCitizens() {
        this.citizenService.getCitizenslist().subscribe(
            citizens => this.citizens = citizens,
            error => this.errorMessage = <any>error
        );
    }

    getDependencies() {
        this.citizenService.getDependencieslist().subscribe(
            dependencies => this.dependencies = dependencies,
            error => this.errorMessage = <any>error
        );
    }

    insertFunctionary() {
        this.functionary['citizen'] = this.citizen;
        this.functionary['dependency'] = this.dependency;
        console.log(this.functionary);
        this.citizenService.createFunctionary(this.functionary).subscribe(
            (response) => {
                console.log(response);
                console.log(response.body);

                this.errorMessage = response;

                console.log(this.msgResponse);

                jQuery('#resBuild').html(response);
                jQuery('#modalBuild').modal('show');
            } )
    }

    private doAccept(){
        jQuery('#resBuild').html(' ');
        jQuery('#modalBuild').modal('hide');
        this.router.navigate(['dashboard']);
    }

    ngOnInit() {
        this.getCitizens();
        this.getDependencies();
    }
}
