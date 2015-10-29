/// <reference path="../typings/tsd.d.ts" />
class Main {
    private _name:string;
    constructor() {
        this._name = `wow`;
    }

    get name():string {
        return this._name;
    }

    set name(n:string) {
        this._name = n;
    }
}