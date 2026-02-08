import {CartItem} from './Movie';

export class Cart {
    private items: {item: CartItem; quantity: number}[] = [];

    add(item: CartItem): void {
        const existing = this.items.find(el => el.item.id === item.id);
        if (existing) {
            if (item.kind === 'physical') {
                existing.quantity += 1;
            }
        } else {
            this.items.push({item, quantity: 1})
        }
    }

    getAll(): {item: CartItem; quantity: number}[] {
        return [...this.items];
    }

    sumCost(): number {
        return this.items.reduce((acc, film) => acc + film.item.price, 0);
    }

    sumCostSale(value: number): number {
        return this.items.reduce((acc, film) => acc + film.item.price * (1 - value/100), 0);
    }

    deleteItem(idForDel: number): void {
        const existing = this.items.find(el => el.item.id === idForDel);
        if (existing) {
            if (existing.item.kind === 'physical') {
                if (existing.quantity > 1) {
                    existing.quantity -= 1;
                } else {
                    this.items.splice(this.items.indexOf(existing), 1);
                }
            } else {
                this.items.splice(this.items.indexOf(existing), 1);
            }
        } else {
            throw new Error('Такого элемента нет в корзине');
        }
    }
}