/**
 * Created by davidmars on 17/10/16.
 */
import { Component }       from '@angular/core';
import {FieldService} from "./field.service";
@Component({
    selector: 'form-builder',
    template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <dynamic-form [fields]="fields"></dynamic-form>
    </div>
  `,
    providers:  [FieldService]
})
export class BuilderComponent {
    fields: any[];
    constructor(service: FieldService) {
        this.fields = service.getFields();
        console.log("Obteniendo campos");
        console.log(service.getFields());
    }
}
