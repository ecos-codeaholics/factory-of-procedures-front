import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { StatusSelectorComponent } from './status-selector/status-selector.component';
import { UploadFileComponent } from './upload-files/upload-file.component';
import { CheckCitizenDirective } from './check-citizen.directive';
import { CheckFunctionaryDirective } from './check-functionary.directive';
import { CheckAdminDirective} from './check-admin.directive'

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        MainMenuComponent,
        CheckCitizenDirective,
        CheckFunctionaryDirective,
        CheckAdminDirective,
        StatusSelectorComponent,
        UploadFileComponent,
        UPLOAD_DIRECTIVES
    ],
    exports: [
        MainMenuComponent,
        CheckCitizenDirective,
        CheckFunctionaryDirective,
        CheckAdminDirective,
        StatusSelectorComponent,
        CommonModule, FormsModule,
        UploadFileComponent
    ]
})

export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // None for the moment
            ]
        }
    }
}
