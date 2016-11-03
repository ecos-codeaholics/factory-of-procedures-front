/*
* SCC
*/
import {bootstrap} from '@angular/platform-browser-dynamic';
import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedureService } from './procedure.service';
import { AuthService } from '../auth/auth.service';
import { RequiredUpload } from './model/required-upload';
import { FormField } from './model/form-field';
import { Procedure } from './model/procedure';
import { FieldService } from "../builder/field.service";

import {FieldBase}          from "../builder/model/field-base";

declare var jQuery: any;

@Component({
    selector: 'procedure-builder',
    templateUrl: 'src/procedure/templates/procedure-builder.component.html'
})

export class ProcedureBuilderComponent implements OnInit {

    title = 'Iniciar Trámite';

    private state: any;
    private mayoralty: any;
    private procedure: Procedure[];
    private procedureName: any;
    private req: RequiredUpload[];
    private fieldProcedure: FormField[];
    private fields: FieldBase<any>[] = [];
    private fields2: FieldBase<any>[] = [];

    public isAuth: boolean;
    public profile: string;

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService,
        private procedureService: ProcedureService,
        private service: FieldService,
        private _eleRef: ElementRef
    ) {

        this.isAuth = authService.isAuth();
        if (this.isAuth) {
            this.profile = authService.getProfile();
        }
    }
    private getModelProcedure() {
        this.procedureService.getModelProcedure(this.procedureName).subscribe(
            (procedure) => {
                console.log(procedure);
                this.procedure = procedure;
                this.req = procedure[0].required;
                this.fields = procedure[0].fields;
                console.log(this.fields);

                this.fields = this.service.getFields(this.fields);
                console.log(this.fields);
            }
        )
    }
    private setFields(fields: any) {

        console.log(this.fields);
    }
    keys(object: {}) {
        //checking undefined object from the request
        if ((object === undefined) || (object === null)) {
            return object;
        }
        //return key and values of the object
        return Object.keys(object);
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.procedureName = params['procedure'];
            this.mayoralty = params['mayoralty'];
        });
        console.log("entre a onInit")
        this.getModelProcedure();
        //this.fields=
    }

    nextTab() : void {
        alert('It works! NextTab');
        //jQuery(this._eleRef.nativeElement).find(".nav-tabs > .active").next("li").find("a")[0].click();
        jQuery(this._eleRef.nativeElement).find(".nav-pills > .active").next("li").find("a")[0].click();
    }

    prevTab() : void {
        alert('It works! PrevTab');
        jQuery(this._eleRef.nativeElement).find('.nav-pills > .active').prev('li').find('a')[0].click();
    }

    ngAfterViewInit() {
        console.log('AfterInitLog');

        jQuery(this._eleRef.nativeElement).find('.btnNext').on('click', () => {
            this.nextTab(); });


        jQuery(this._eleRef.nativeElement).find('.btnPrevious').on('click', () => {
            this.prevTab(); });
    }



}
