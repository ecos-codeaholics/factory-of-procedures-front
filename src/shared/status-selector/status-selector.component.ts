import { Component, Output, EventEmitter, OnInit } from '@angular/core/';

@Component({
    selector: 'status-selector',
    templateUrl: 'src/shared/status-selector/templates/status-selector.component.html'

})

export class StatusSelectorComponent implements OnInit {
    @Output() select = new EventEmitter();
    statuses = ['En proceso', 'Finalizado'];

    filterHistoric(status) {
        let val=this.statuses.indexOf(status);
        if (val != -1)
        this.select.emit(this.statuses[val]);
    }
    ngOnInit() {
        this.select.emit(this.statuses[1]);
    }
}
