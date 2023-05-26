export default class AuthRequestModel {
    email;
    password;

    constructor(x) {
        if (typeof x === "object") {
            this.email = x.email;
            this.password = x.password;
        }
        else {
            this.email = "";
            this.password = "";
        }
    }
}