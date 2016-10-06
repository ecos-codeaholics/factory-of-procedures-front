import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

@Directive({
    selector: '[checkUser]'
})

export class CheckUserDirective {


    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set checkUser(profile: string) {
        console.log(profile);
        if (profile == "citizen") {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            if (profile == "functionary") {
                this.viewContainer.createEmbeddedView(this.templateRef);
             }
            else {this.viewContainer.clear();}
        }
    }
}
