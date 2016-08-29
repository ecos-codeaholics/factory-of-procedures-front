"use strict";
var Citizen = (function () {
    function Citizen(_id, identification, name, lastName1, lastName2, birthDate, email, password) {
        this._id = _id;
        this.identification = identification;
        this.name = name;
        this.lastName1 = lastName1;
        this.lastName2 = lastName2;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
    }
    return Citizen;
}());
exports.Citizen = Citizen;
//# sourceMappingURL=citizen.js.map