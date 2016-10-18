/**
 * Created by davidmars on 17/10/16.
 */
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FieldControlService } from "./field-control.service";

import { DynamicFormComponent } from "./dynamic-form.component";
import { DynamicFormFieldComponent } from "./dynamic-form-field.component";

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DynamicFormComponent,
        DynamicFormFieldComponent
    ],
    providers: [
        FieldControlService
    ],
    exports: [
        DynamicFormComponent,
        DynamicFormFieldComponent
    ]
})

export class BuilderModule { }
