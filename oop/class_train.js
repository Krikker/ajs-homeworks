export class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Передано некорректное значение. Значение должно быть строкой длиной от 2 до 10 символов');
        };
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error(
                'Передано некорректное значение. Значение должно быть одно из представленных: [Bowman, Swordsman, Magician, Daemon, Undead, Zombie]'
                );
        };
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Уровень жизни персонажа равен 0. Повысить уровень невозможно');
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health === 0) {
            throw new Error('Здоровье персонажа равно нулю');
        }
        this.health -= points * (1 - this.defence / 100)
    }
}

export class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 25;
    }
}
export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }
}
export class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}
export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 25;
        this.defence = 25;
    }
}
export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
        this.attack = 40;
        this.defence = 10;
    }
}
export class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
        this.attack = 10;
        this.defence = 40;
    }
}