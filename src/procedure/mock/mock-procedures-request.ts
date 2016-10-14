import { ProcedureRequest } from '../model/procedure-request';
import { Citizen } from '../../citizen/citizen';
import { ProcedureData } from '../model/procedure-data';
import { Step } from '../model/step';

export const PROCEDURES_REQUEST: ProcedureRequest[] = [
    {
        id: 1,
        className: "Tramite Lipsum",
        fileNumber: 123456789,
        citizen: new Citizen(
            "1",
            808080,
            "pedro",
            "perez",
            "gomez",
            "1983/01/11",
            "pedro@perez.net",
            null
        ),
        mayoralty: "Caldas",
        procedureData: new ProcedureData(
            "Solicito amablemente un certificado de residencia",
            "barrio lat",
            "calle 10 # 10 - 10",
            123456,
            55667733
        ),
        deliveryDocs: [
            '/ruta/al/archivo.txt',
            '/ruta/al/archivo2.txt',
        ],
        steps: new Step(
            "En curso",
            "Dependencia",
            "lorem ipsum dolor",
            "pepa pombo",
            1
        ),
        startDate: "ISODate('2016-07-21T05:00:00Z')",
        finishDate: "ISODate('2016-07-21T05:00:00Z')",
        status: "En proceso"
    },
    {
        id: 2,
        className: "Tramite Lipsum",
        fileNumber: 123456789,
        citizen: new Citizen(
            "1",
            808080,
            "pedro",
            "perez",
            "gomez",
            "1983/01/11",
            "pedro@perez.net",
            null
        ),
        mayoralty: "Caldas",
        procedureData: new ProcedureData(
            "Solicito amablemente un certificado de residencia",
            "barrio lat",
            "calle 10 # 10 - 10",
            123456,
            55667733
        ),
        deliveryDocs: [
            '/ruta/al/archivo.txt',
            '/ruta/al/archivo2.txt',
        ],
        steps: new Step(
            "Finalizado",
            "Dependencia",
            "lorem ipsum dolor",
            "pepa pombo",
            1
        ),
        startDate: "ISODate('2016-07-21T05:00:00Z')",
        finishDate: "ISODate('2016-07-21T05:00:00Z')",
        status: "Finalizado"
    },
]
