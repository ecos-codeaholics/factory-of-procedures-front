import { Component, Output, EventEmitter, OnInit } from '@angular/core/';

@Component({
    selector: 'status-selector',
    templateUrl: 'src/shared/status-selector/templates/status-selector.component.html'
})

export class StatusSelectorComponent implements OnInit {
    @Output() select = new EventEmitter();

    console.log(select);
    statuses = ['ongoing', 'all'];

    ngOnInit() {
        this.select.emit(this.statuses[1]);
    }
}
