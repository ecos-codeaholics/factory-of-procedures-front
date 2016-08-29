import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { State } from './state';
import { STATES } from './mock-state';

@Injectable()
export class StateService {

    getStates() {

        return Promise.resolve(STATES);
    }
}
