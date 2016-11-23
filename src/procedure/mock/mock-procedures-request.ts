import { ProcedureRequest } from '../model/procedure-request';
import { Citizen } from '../../citizen/citizen';
import { ProcedureData } from '../model/procedure-data';
import { Activity } from '../model/activity';
import { Status } from '../model/status';

import { ProcedureHistory } from '../model/procedure-history';

export const PROCEDURES_REQUEST: ProcedureRequest[] = [
    {
        id: 1,
        className: "Tramite Lipsum",
        fileNumber: "123456789",
        citizen: new Citizen(
            "1",
            808080,
            "pedro",
            "perez",
            "gomez",
            "",
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
        activity: [
            new Activity(
                "1",
                "nombre actividad",
                "descripcion de la actividad",
                "Dependencia de la actividad",
                1,
                "jose perez",
                "",
                new Status(
                    "En Curso",
                    "Comentario 1"
                )
            ),
            new Activity(
                "2",
                "nombre actividad",
                "descripcion de la actividad",
                "Dependencia de la actividad",
                1,
                "jose perez",
                "",
                new Status(
                    "Finalizado",
                    "Comentario 1"
                )
            )
        ],
        histories: [],
        startDate: "ISODate('2016-07-21T05:00:00Z')",
        finishDate: "ISODate('2016-07-21T05:00:00Z')",
        status: "En proceso"
    },
    {
        id: 2,
        className: "Tramite Lipsum",
        fileNumber: "123456789",
        citizen: new Citizen(
            "1",
            808080,
            "pedro",
            "perez",
            "gomez",
            "",
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
        activity: [
            new Activity(
                "1",
                "nombre actividad",
                "descripcion de la actividad",
                "Dependencia de la actividad",
                1,
                "jose perez",
                "",
                new Status(
                    "En Curso",
                    "Comentario 1"
                )
            ),
            new Activity(
                "2",
                "nombre actividad",
                "descripcion de la actividad",
                "Dependencia de la actividad",
                1,
                "jose perez",
                "",
                new Status(
                    "Finalizado",
                    "Comentario 1"
                )
            )
        ],
        histories: [],
        startDate: "ISODate('2016-07-21T05:00:00Z')",
        finishDate: "ISODate('2016-07-21T05:00:00Z')",
        status: "Finalizado"
    },
]
