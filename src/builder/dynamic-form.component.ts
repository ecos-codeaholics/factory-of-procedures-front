/**
 * Created by davidmars on 17/10/16.
 */
import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from "./model/field-base";
import { FieldControlService } from "./field-control.service";

@Component({
    selector: 'dynamic-form',
    templateUrl: 'src/builder/templates/dynamic-form.component.html',
})

export class DynamicFormComponent implements OnInit, OnChanges {

    @Input() fields: FieldBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private fcs: FieldControlService) { }

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
    }

}
