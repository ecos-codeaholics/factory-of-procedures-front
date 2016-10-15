import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

@Directive({
    selector: '[checkFunctionary]'
})

export class CheckFunctionaryDirective {


    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }

    @Input() set checkFunctionary(profile: string) {
        //console.log(profile);
        if (profile == "functionary") {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }else {
            this.viewContainer.clear();
        }

    }
}
