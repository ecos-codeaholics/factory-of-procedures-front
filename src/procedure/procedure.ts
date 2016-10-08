import { Citizen } from '../citizen/citizen';
import { ProcedureData } from './model/procedure-data';
import { Step } from './model/step';

export class Procedure {

    constructor(
        public id: number,
        public name: string,
        public department: string,
        public city: string,
        public status: string
    ) { }
}


}

export class citizen {
    constructor(public identification: number,
                public name: string,
                public lastName1: string,
                public lastName2: string,
                public email: string) {
    }

}

export class procedureData {
    constructor(public cartadesolicitud: string,
                public barrio: string,
                public direccion: string,
                public telefono: number,
                public email: string) {
    }



}