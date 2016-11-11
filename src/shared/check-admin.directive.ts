import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

@Directive({
    selector: '[checkAdmin]'
})

export class CheckAdminDirective {


    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }

    @Input() set checkAdmin(profile: string) {
        //console.log(profile);
        if (profile == "admin") {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }else {
            this.viewContainer.clear();
        }

    }
}
