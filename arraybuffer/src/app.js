// @ts-nocheck
export class Magician {
    constructor(attack) {
        this.attack = attack;
        this.isStoned = false;
    }

    get stoned() {
        return this.isStoned;
    }

    set stoned(value) {
        this.isStoned = Boolean(value);
    }

    get attackRange() {
        return Math.round(this.attack);
    }

    set attackRange(cell) {
        const linear = (100 - (cell - 1) * 10)/100;
        this.attack *= linear;
        if (this.isStoned && cell > 1) {
            this.attack -= Math.log2(cell) * 5;
        };
    };
}

export class Daemon extends Magician {
    constructor(attack) {
        super(attack);
    }
}

export class ArrayBufferConverter {
    constructor() {
        this.buffer = null;
    }

    load(buffer) {
        if (!(buffer instanceof ArrayBuffer)) {
            throw new Error('Переменная должна быть выходом ArrayBuffer')
        };
        this.buffer = buffer;
    }

    toString() {
        if (!this.buffer) {
            throw new Error('Буфер не загружен');
        };
        const view = new Uint16Array(this.buffer);
        let newStr = '';
        for (let i = 0; i < view.length; i++) {
            newStr += String.fromCharCode(view[i]);
        };
        return newStr;
    }
}