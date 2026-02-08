import {GameSavingLoader} from './app.js';
import read from './reader.js';
import json from './parser.js';

jest.mock('./reader.js');
jest.mock('./parser.js');

describe('Проверяем класс GameSavingLoader', () => {
    const mockData = new ArrayBuffer(100);
    const mockParsed = {
        id: 9,
        created: 1546300800,
        userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
        },
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Проверяем вывод из класса', async () => {
        read.mockResolvedValue(mockData);
        json.mockResolvedValue(mockParsed);
        const res = await GameSavingLoader.load();
        expect(res).toEqual(mockParsed);
    })

    test('Проверяем выброс ошибки', async () => {
        read.mockRejectedValue(new Error('Read failed'));
        await expect(GameSavingLoader.load()).rejects.toThrow('Read failed');
    })

})