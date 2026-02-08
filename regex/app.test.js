import {Validator} from './app.js'

test.each([['212717281', false], ['Kr1kker', true], ['2gghf', false], ['gghf_', false]]
)('Проверка на валидацию никнейма', (name, boolRes) => {
    const newClass = new Validator();
    const res = newClass.validateUsername(name);
    expect(res).toBe(boolRes);
})

test.each([['8 (927) 000-00-00', '+79270000000'], ['+7 960 000 00 00', '+79600000000'], 
           ['+86 000 000 0000', '+860000000000'], ['  8928 288   -3 47_9', '+79282883479']]
)('Проверка на валидацию телефона', (number, realPhone) => {
    const newClass = new Validator();
    const res = newClass.validatePhoneNumbers(number);
    expect(res).toBe(realPhone);
})

test('Проверка на выброс ошибки', () => {
    expect(() => {
        const newClass = new Validator();
        newClass.validatePhoneNumbers(+79273827346);
    }).toThrow();
})