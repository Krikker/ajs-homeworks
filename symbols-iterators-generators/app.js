class Character {
    constructor(name, type, health, level, attack, defense) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defense = defense;
    }
}

class Team {
    constructor() {
        this.members = [];
    }

    add(member) {
        this.members.push(member);
    }

    *[Symbol.iterator]() {
        for (let char of this.members) {
            yield char;
        }
    }
}

function canIterate(obj) {
    if (Symbol.iterator in Object(obj)) {
        return true;
    } else {
        return false;
    }
}

// 1 Задание
// class Team {
//     constructor() {
//         this.members = [];
//     }

//     add(member) {
//         this.members.push(member);
//     }

//     [Symbol.iterator]() {
//         let i = 0;
//         let heroesArr = this.members;

//         return {
//             next() {
//                 if (i < heroesArr.length) {
//                     return {
//                         done: false,
//                         value: heroesArr[i++]
//                     }
//                 };
//                 return {
//                     done: true
//                 };
//             }
//         };
//     }
// }

const char1 = new Character('A', 'X', 1, 1, 1, 1);
const char2 = new Character('B', 'Y', 1, 1, 1, 2);
const char3 = new Character('C', 'Z', 1, 1, 1, 3);

const team = new Team();
team.add(char1);
team.add(char2);
team.add(char3);
console.log(canIterate('fff'))
// for (let h of team) {
//     console.log(h)
// }