/**
 * Created by davidmars on 17/10/16.
 */
import {Component, Input, OnInit, OnChanges, Inject, forwardRef} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from "./model/field-base";
import { FieldControlService } from "./field-control.service";
import { ProcedureService } from "../procedure/procedure.service";
import { Router } from "@angular/router";
import { ProcedureBuilderComponent } from "../procedure/procedure-builder.component";


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
                private _router: Router,
                @Inject(forwardRef(() => ProcedureBuilderComponent)) private procedureBuilder: ProcedureBuilderComponent
    )
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

    onSubmit(form: any) {
        this.payLoad = JSON.stringify(this.form.value);
        console.log("I'm in the onSubmit Method dynamic form" + this.form.value + this.mayoralty + this.procedureName );
        //change next tab
        this.procedureBuilder.nextTab();

        console.log('you submitted value:', this.form.value);


        //service to hit to the back
        //this.setProcedureStarted();
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
