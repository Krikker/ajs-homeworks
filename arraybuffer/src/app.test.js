import {Magician, Daemon, ArrayBufferConverter} from './app.js';

describe('Проверка класса Magician и Daemon', () => {
    test('Проверка мощности атаки на разных клетках', () => {
        const newChar = new Magician(100);
        newChar.attackRange = 2;
        expect(newChar.attack).toBe(90);
        expect(newChar.attackRange).toBe(90);
    });

    test('Проверка мощности атаки на разных клетках при эффекте дурмана', () => {
        const newChar = new Magician(100);
        newChar.stoned = true;
        newChar.attackRange = 2;
        expect(newChar.attack).toBe(85);
        expect(newChar.stoned).toBe(true);
    });

    test('Проверка класса Daemon', () => {
        const newChar = new Daemon(100);
        newChar.attackRange = 2;
        expect(newChar.attack).toBe(90);
    });
});

describe('Проверка работоспособности класса ArrayBufferConverter', () => {

    function getBuffer() {
        const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
        return (input => {
          const buffer = new ArrayBuffer(data.length * 2);
          const bufferView = new Uint16Array(buffer);
          for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
          }
          return buffer;
        })(data);
    }

    test('Проверка работоспособности всего цикла', () => {
        const buffer = new ArrayBufferConverter();
        const newBuffer = getBuffer();
        buffer.load(newBuffer);
        const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
        expect(buffer.toString()).toBe(expected)
        expect(() => buffer.load([])).toThrow();
    })

    test('Проверка выброса ошибки в toString', () => {
        const buffer = new ArrayBufferConverter();
        expect(() => buffer.toString()).toThrow();
    })
})