import {arrayByOrder, specialAttacks} from './app.js'

test('Работоспособность функции arrayByOrder', () => {
    const res = arrayByOrder({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"]);
    expect(res).toEqual([{"key": "name", "value": "мечник"}, {"key": "level", "value": 2}, {"key": "attack", "value": 80}, {"key": "defence", "value": 40}, {"key": "health", "value": 10}])
})

test('Ключа нет в свойствах объекта', () => {
    const res = arrayByOrder({name: 'мечник', health: 10}, ["name", "missing"]);
    expect(res).toEqual([{"key": "name", "value": "мечник"}, {"key": "health", "value": 10}]);
})

test('Проверка на отсутствие унаследованного значения', () => {
    const parent = {inherited: 'value'};
    const obj = Object.create(parent);
    obj.name = 'hero';
    const res = arrayByOrder(obj, ['name']);
    expect(res).toEqual([{"key": "name", "value": "hero"}])
})

test('Проверка функции specialAttacks', () => {
    const res = specialAttacks({
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
          {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
          }, 
          {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // <- обратите внимание, описание "засекречено"
          }
        ]
    });
    expect(res).toEqual([
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Описание недоступно'
        }
      ])
})