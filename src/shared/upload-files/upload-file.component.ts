/**
 * Documentacion para desarrollar el modulo, fue tomada de http://ng2-uploader.com/docs
 * 
 * multiple: Debe ser implementado para determinar si muestra la opcion multiple o simple
 */

import { Component, Output, NgZone, OnInit, Input } from '@angular/core/';
import { API_URL } from '../constant/api-url';

@Component({
    selector: 'upload-file',
    templateUrl: 'src/shared/upload-files/templates/upload-file.component.html',
    inputs: ['legend', 'multiple', 'url']

})

export class UploadFileComponent implements OnInit {

    legend: string;
    multiple: boolean;
    url: string;

    private responses: any = {};
    private progress: number = 0;
    private options: Object;


    response: any;
    error: any;
    private uploadFile: any;
    private uploadProgress: number = 0;
    private uploadResponse: any = {};
    private zone: NgZone;
    private basicOptions: Object;

    constructor(
        private apiUrl: API_URL
    ) { }

    ngOnInit() {
        this.zone = new NgZone({ enableLongStackTrace: false });
        this.basicOptions = {
            url: this.apiUrl.DOCUMENT(),
            calculateSpeed: false,
            filterExtensions: true,
            allowedExtensions: ['image/png', 'image/jpg'],
            autoUpload: true
        };
        this.options = {
            url: 'http://api.ng2-uploader.com:10050/upload'
        };
    }
    handleUpload(data: any): void {
        this.uploadFile = data;
        this.zone.run(() => {
            this.uploadProgress = data.progress.percent;
        });
        let resp = data.response;
        if (resp) {
            resp = JSON.parse(resp);
            this.uploadResponse = resp;
        }

    }

    handleMultipleUpload(data: any): void {
        let index = this.response.findIndex(x => x.id === data.id);
        if (index === -1) {
            this.responses[1].push(data);
        } else {
            let total = 0, uploaded = 0;
            this.response.forEach(resp => {
                total += resp.progress.total;
                uploaded += resp.progress.loaded;
            });
            let percent = uploaded / (total / 100) / 100;

            this.zone.run(() => {
                this.response[index] = data;
                this.progress = percent;
            });
        }
    }


}
