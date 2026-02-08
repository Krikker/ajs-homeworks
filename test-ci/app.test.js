import {healthBar, sortByHealth, getLevel} from './app.js';
import fetchData from './http.js';

test.each([[{health: 90}, 'healthy'], [{health: 40}, 'wounded'], [{health: 10}, 'critical']]
    )(('checking health bar output in-game'), (character, rightValue) => {
    const result = healthBar(character);
    expect(result).toBe(rightValue);
})

test('sort by heroes health bar', () => {
    const input = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];
    const mySolution = sortByHealth(input);
    expect(mySolution).toEqual(expected);
})

jest.mock('./http.js');
beforeEach(() => {
    jest.resetAllMocks();
});
test('test web server function by mock', () => {
    fetchData.mockReturnValue({
        status: 'ok',
        level: 10,
    });
    const result = getLevel(10);
    expect(result).toBe('Ваш текущий уровень: 10');
    expect(fetchData).toHaveBeenCalledWith('https://server/user/10');
});
test('test web server function by mock', () => {
    fetchData.mockReturnValue({
        status: 'error',
        level: null,
    });
    const result = getLevel(10);
    expect(result).toBe('Информация об уровне временно недоступна');
})