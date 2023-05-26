export default class FileModel {
    id;
    name;
    fileName;
    mimeType;
    url;
    createdAt;

    constructor(x) {
        if (typeof x === "object") {
            this.id = x.id;
            this.name = x.name;
            this.fileName = x.fileName;
            this.mimeType = x.mimeType;
            this.url = x.url;
            this.createdAt = x.createdAt;
        }
        else {
            this.id = "";
            this.name = "";
            this.fileName = "";
            this.mimeType = "";
            this.url = "";
            this.createdAt = new Date();
        }
    }
}