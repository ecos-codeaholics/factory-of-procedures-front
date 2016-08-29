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

    @Input() set checkUser(role: string) {

        console.log(role);

        //if (role == "citizen") {
        if (role == "gonto") {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
