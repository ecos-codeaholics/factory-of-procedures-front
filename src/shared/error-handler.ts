import { Injectable } from '@angular/core';

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
        // Handle error heavy lifting here
        // Response sould have defined error code

        return error;
    }
}
