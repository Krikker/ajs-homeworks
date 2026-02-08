import read from './reader.js';
import json from './parser.js';

export class GameSaving {
    constructor({id, created, userInfo}) {
        this.id = id;
        this.created = created;
        this.userInfo = {...userInfo};
    }
}

export class GameSavingLoader {
    // static load() {
    //     return read().then(response => json(response)).then(data => new GameSaving(data));
    // }
    static async load() {
        const buffer = await read();
        const response = await json(buffer);
        const newData = new GameSaving(response);
        return newData;
    }
}