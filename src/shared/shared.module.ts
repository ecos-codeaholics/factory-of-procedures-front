import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { StatusSelectorComponent } from './status-selector/status-selector.component';
import { UploadFileComponent } from './upload-files/upload-file.component';
import { CheckUserDirective } from './check-user.directive';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        MainMenuComponent,
        CheckUserDirective,
        StatusSelectorComponent,
        UploadFileComponent,
        UPLOAD_DIRECTIVES
    ],
    exports: [
        MainMenuComponent,
        CheckUserDirective,
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
