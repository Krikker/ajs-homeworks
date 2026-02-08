import {Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie} from './class_train.js'

test('Проверка на ввод валидного значения', () => {
    const newCharacter = new Character('Krikker', "Bowman");
    expect(newCharacter.name).toBe('Krikker');
    expect(newCharacter.type).toBe('Bowman');
    expect(newCharacter.health).toBe(100);
    expect(newCharacter.level).toBe(1);
});


test('Проверка на некорректное имя', () => {
    expect(() => new Character('djhdhfdhufhedfef', 'Bowman')).toThrow();
});
test('Проверка на некорректный класс героя', () => {
    expect(() => new Character('Krikker', 'Рыцарь')).toThrow();
});


test('Bowman', () => {
    const bowman = new Bowman('Krikker');
    const b = [bowman.attack, bowman.defence, bowman.type];
    expect(b).toEqual([25, 25, 'Bowman']);
})
test('Swordsman', () => {
    const swordsman = new Swordsman('Krikker');
    const s = [swordsman.attack, swordsman.defence, swordsman.type];
    expect(s).toEqual([40, 10, 'Swordsman']);
})
test('Magician', () => {
    const magician = new Magician('Krikker');
    const m = [magician.attack, magician.defence, magician.type];
    expect(m).toEqual([10, 40, 'Magician']);
})
test('Daemon', () => {
    const daemon = new Daemon('Krikker');
    const d = [daemon.attack, daemon.defence, daemon.type];
    expect(d).toEqual([25, 25, 'Daemon']);
})
test('Undead', () => {
    const undead = new Undead('Krikker');
    const u = [undead.attack, undead.defence, undead.type];
    expect(u).toEqual([40, 10, 'Undead']);
})
test('Zombie', () => {
    const zombie = new Zombie('Krikker');
    const z = [zombie.attack, zombie.defence, zombie.type];
    expect(z).toEqual([10, 40, 'Zombie']);
})


test('Проверка на levelUp', () => {
    const newHero = new Bowman('Krikker');
    const secondHero = new Bowman('Ventor');
    newHero.levelUp();
    const newLevelArray = [newHero.health, newHero.attack, newHero.defence, newHero.level];
    expect(newLevelArray).toEqual([100, secondHero.attack * 1.2, secondHero.defence * 1.2, 2]);
})
test('Проверка levelUp with 0 hp', () => {
    const newHero = new Bowman('Krikker');
    newHero.health = 0;
    expect(() => newHero.levelUp()).toThrow();
})


test('Проверка damage', () => {
    const newHero = new Bowman('Krikker');
    newHero.damage(100);
    expect(newHero.health).toBe(25);
})
test('Проверка damage with 0 hp', () => {
    const newHero = new Bowman('Krikker');
    newHero.health = 0;
    expect(() => newHero.damage(10)).toThrow();
})