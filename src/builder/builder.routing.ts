import { RouterModule } from '@angular/router';
import {DynamicFormComponent} from "./dynamic-form.component";
import {BuilderComponent} from "./builder.component";


export const routing = RouterModule.forChild([

    { path: '', component: BuilderComponent},
]);
