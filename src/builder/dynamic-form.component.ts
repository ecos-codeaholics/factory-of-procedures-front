/**
 * Created by davidmars on 17/10/16.
 */
import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from "./model/field-base";
import { FieldControlService } from "./field-control.service";
import { ProcedureService } from "../procedure/procedure.service"
import { Router } from "@angular/router"


@Component({
    selector: 'dynamic-form',
    templateUrl: 'src/builder/templates/dynamic-form.component.html',
})

export class DynamicFormComponent implements OnInit, OnChanges {

    @Input() fields: FieldBase<any>[] = [];
    @Input() mayoralty: any;
    @Input() procedureName: any;

    form: FormGroup;
    payLoad = '';
    router: any;

    constructor(private fcs: FieldControlService,
                private procedureService: ProcedureService,
                private _router: Router )
    {
        this.router = _router;
    }

    ngOnInit(): void {
//        this.form = this.fcs.toFormGroup(this.fields);
//        console.log(this.fields);
    }

    ngOnChanges(changes:any):void {
        this.form = this.fcs.toFormGroup(this.fields);
        console.log(this.fields);
        console.log("OnChanges");

    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
        this.setProcedureStarted();
    }

    private setProcedureStarted() {
        console.log("route: "+this.router.url);

        this.procedureService.setProcedureStarted(this.form.value, this.mayoralty, this.procedureName).subscribe(
            (response) => {
                console.log(response);

            }
        )
    }

    siguiente(){
        console.log("Entro a siguiente metodo");


    }

}
