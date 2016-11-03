/**
 * Created by AOSORIO on 16-Oct-16.
 */
export class Status {

    public status: string;
    public comment: string;

    constructor(current: string, comment: string) {
        this.status = current;
        this.comment = comment;
    }

}
