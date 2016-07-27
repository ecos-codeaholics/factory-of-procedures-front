import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ProcedureAttachment } from './procedure-attachment';

@Injectable()
export class ProcedureService {

    private fileUploadUrl = '127.0.0.1/procedures/documents/upload';

    uploadFile(file: File): Promise<ProcedureAttachment> {
        return new Promise((resolve, reject) => {

            let xhr: XMLHttpRequest = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status == 200) {
                        resolve(<ProcedureAttachment>JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', this.fileUploadUrl, true);

            let formData = new FormData();
            formData.append("file", file, file.name);

            xhr.send(formData);
        })
    }


}
