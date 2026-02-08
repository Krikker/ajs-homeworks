export class Team {
    constructor() {
        this.members = new Set();
    }

    add(hero) {
        if (this.members.has(hero)) {
            throw new Error('Персонаж уже состоит в команде');
        }
        this.members.add(hero);
    }

    addAll(...heroesArr) {
        heroesArr.forEach(hero => this.members.add(hero));
    }

    toArray() {
        return Array.from(this.members);
    }
}

export class ErrorRepository {
    constructor() {
        this.errorCodes = new Map([
            [1, 'Выбран неверный класс персонажа'], 
            [2, 'Здоровье персонажа равно нулю'], 
            [3, 'Предмет этого типа уже экипирован']
        ]);
    }

    translate(code) {
        return this.errorCodes.get(code) || 'Unknown error';
    }
}

export class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ])
        this.userSettings = new Map();
    }

    set(key, value) {
        if (!(this.defaultSettings.has(key))) {
            throw new Error('Неправильное значение ключа');
        };
        const allowedValues = {
            theme: ['dark', 'light', 'gray'],
            music: ['trance', 'pop', 'rock', 'chillout', 'off'],
            difficulty: ['easy', 'normal', 'hard', 'nightmare'],
        };
        if (!(allowedValues[key].includes(value))) {
            throw new Error('Неправильное значение настроек');
        };
        this.userSettings.set(key, value);
    }
    
    get settings() {
        this.userSettings.forEach((value, key) => {
            this.defaultSettings.set(key, value);
        })
        return this.defaultSettings;
    }
}