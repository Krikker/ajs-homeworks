import {Team, ErrorRepository, Settings} from './app.js'

describe('Проверка класса Team', () => {
    let myTeam;
    let char1;
    let char2;

    beforeEach(() => {
        myTeam = new Team();
        char1 = {name: 'мечник', health: 10};
        char2 = {name: 'рыцарь', health: 20};
    });

    test('Проверяем возможности метода add класса Team', () => {
        myTeam.add(char1);
        expect(myTeam.toArray()).toEqual([char1]);
        expect(() => {
            myTeam.add(char1);
        }).toThrow();
    })

    test('Проверяем возможности метода addAll класса Team', () => {
        myTeam.addAll(char1, char2, char1);
        expect(myTeam.toArray()).toEqual([char1, char2]);
    })
})

describe('Проверка класса ErrorRepository', () => {
    test('Проверка функции translate', () => {
        const newError = new ErrorRepository();
        expect(newError.translate(1)).toBe('Выбран неверный класс персонажа');
        expect(newError.translate(4)).toBe('Unknown error');
    })
})

describe('Проверка класса Settings', () => {
    test('Проверка функции set', () => {
        const newSettings = new Settings();
        newSettings.set('theme', 'light');
        expect(newSettings.settings.get('theme')).toBe('light');
        expect(() => newSettings.set('theme', 'white')).toThrow();
        expect(() => newSettings.set('themee', 'light')).toThrow();
    })
})