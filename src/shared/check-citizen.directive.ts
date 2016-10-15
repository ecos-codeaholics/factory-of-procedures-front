import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

@Directive({
    selector: '[checkCitizen]'
})

export class CheckCitizenDirective {


    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }

    @Input() set checkCitizen(profile: string) {
       // console.log(profile);
        if (profile == "citizen") {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }

    }
}
