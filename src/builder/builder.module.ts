/**
 * Created by davidmars on 17/10/16.
 */
import {ReactiveFormsModule}          from '@angular/forms';
import {NgModule}                     from '@angular/core';
import {DynamicFormComponent}           from "./dynamic-form.component";
import {routing}                      from './builder.routing';
import {DynamicFormFieldComponent} from "./dynamic-form-field.component";


@NgModule({
    imports: [
        ReactiveFormsModule,
        routing
    ],
    declarations: [DynamicFormComponent, DynamicFormFieldComponent],
    bootstrap: [DynamicFormComponent, DynamicFormFieldComponent]
})

export default class BuilderModule {
    constructor() {
    }
}