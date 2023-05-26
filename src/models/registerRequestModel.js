export default class RegisterRequestModel {
    email;
    password;
    name;

    constructor(x) {
        if (typeof x === "object") {
            this.email = x.email;
            this.password = x.password;
            this.name = x.name;
        }
        else {
            this.email = "";
            this.password = "";
            this.name = "";
        }
    }
}