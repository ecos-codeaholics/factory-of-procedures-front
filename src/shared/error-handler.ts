import { Injectable } from '@angular/core';


declare var jQuery: any;

/**
 * Note: The aim of this class is to provide full error
 * handling operations like mentioned in this issue:
 * https://github.com/angular/angular/issues/2684
 * Some of those concerns are listed below:
 * - Normalized error responses
 * - Explicit handling of certain HTTP response codes
 *   ej: (404, 401, 500, etc)
 * - Loggingprompt user to authenticat
 */

@Injectable()
export class ErrorHandler {
    check(error: any) {
        console.log("Se detecto un error en el error-handle... |");
        console.log(error);
        var defaulMSG = "UPS, Tenemos un error, por favor intentelo mas tarde.";
        try {
            var modal = true;
            switch (error.status) {
                case 0:
                    jQuery('.modal-body').html(defaulMSG);
                    break;
                case 200:
                case 401:
                    if (error["_body"] != "null") {
                        var body = JSON.parse(error["_body"]);
                        jQuery('.modal-body').html(body.responseMsg);
                        jQuery("#alertMsg").html('<div class="alert alert-danger" role="alert">' + body.responseMsg + '</div>');
                    } else {
                        jQuery('.modal-body').html(defaulMSG);
                    }
                    break;
                default:
                    jQuery('.modal-body').html(defaulMSG);
            }
            if (modal) {
                jQuery('.modal-title').html("Algo anda mal.");
                jQuery('.modal').modal('show');

            }
        } catch (err) {
            jQuery('.modal-body').html(defaulMSG);
            jQuery('.modal').modal('show');
        }
        return error;
    }
}
