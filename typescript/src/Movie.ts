export interface CartItem {
    kind: 'digital' | 'physical';
    id: number;
    price: number;
}

export class Movie implements CartItem {
    readonly kind = 'digital' as const;

    constructor(
        public id: number,
        public title: string,
        public titleEng: string,
        public year: number,
        public country: string,
        public slogan: string,
        public genre: string[],
        public duration: number,
        public price: number,
    ) { } 
}

export class Gadgets implements CartItem {
    readonly kind = 'physical' as const;

    constructor(
        public id: number,
        public goodsName: string,
        public type: string,
        public year: number,
        public description: string,
        public price: number,
    ) { } 
}