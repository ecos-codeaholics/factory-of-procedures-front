import { RouterModule } from '@angular/router';

import { CitizenListComponent } from './citizen-list.component';
import { CitizenFormComponent } from './citizen-form.component';
import { CitizenDetailComponent } from './citizen-detail.component';

export const routing = RouterModule.forChild([

    { path: '', component: CitizenListComponent },
    { path: 'edit', component: CitizenFormComponent },
    { path: 'detail/:id', component: CitizenDetailComponent }
]);
