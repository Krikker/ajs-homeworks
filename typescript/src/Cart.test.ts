import {Cart} from './Cart';
import {Movie, Gadgets} from './Movie';

describe('Проверка класса Cart', () => {
    let newCart: Cart;
    let movie1: Movie;
    let movie2: Movie;
    let gadget1: Gadgets;


    beforeEach(() => {
        newCart = new Cart();
        movie1 = new Movie(
            1,
            'Мстители',
            'The Avengers',
            2012,
            'США',
            'Avengers Assemble!',
            ['фантастика', 'боевик', 'фэнтези', 'приключения'],
            137,
            500
        );
        movie2 = new Movie(
            2,
            'Мстители',
            'The Avengers',
            2013,
            'США',
            'Avengers Assemble!',
            ['фантастика', 'боевик', 'фэнтези', 'приключения'],
            137,
            500
        );
        gadget1 = new Gadgets(
            3,
            'Samsung S26',
            'Телефон',
            2025,
            'Новый технологичный',
            1000,
        );
    });

    test('Проверяем добавление элементов', () => {
        newCart.add(movie1);
        newCart.add(movie1);
        newCart.add(gadget1);
        newCart.add(gadget1);
        newCart.add(gadget1);
        expect(newCart.getAll()).toEqual([{"item": movie1, "quantity": 1}, {"item": gadget1, "quantity": 3}]);
    })

    test('Проверяем сумму корзины и скидки', () => {
        newCart.add(movie1);
        newCart.add(movie2);
        expect(newCart.sumCost()).toBe(movie1.price + movie2.price);
        expect(newCart.sumCostSale(10)).toBe((movie1.price + movie2.price)/100 * 90);
        expect(newCart.sumCostSale(30)).toBe((movie1.price + movie2.price)/100 * 70);
        expect(newCart.sumCostSale(50)).toBe((movie1.price + movie2.price)/100 * 50);
    })

    test('Проверяем удаление элементов', () => {
        newCart.add(movie1);
        newCart.add(movie2);
        newCart.add(gadget1);
        newCart.deleteItem(movie2.id)
        expect(newCart.getAll()).toEqual([{"item": movie1, "quantity": 1}, {"item": gadget1, "quantity": 1}]);
        newCart.add(gadget1);
        newCart.add(gadget1);
        newCart.deleteItem(gadget1.id);
        expect(newCart.getAll()).toEqual([{"item": movie1, "quantity": 1}, {"item": gadget1, "quantity": 2}]);
        newCart.deleteItem(gadget1.id);
        newCart.deleteItem(gadget1.id);
        expect(newCart.getAll()).toEqual([{"item": movie1, "quantity": 1}]);
        expect(() => newCart.deleteItem(7)).toThrow();
    })
})