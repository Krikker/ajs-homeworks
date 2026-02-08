export function arrayByOrder(character, array) {
    let arrFinal = [];
    const usedKeys = new Set();
    const unused = [];

    for (const key of array) {
        if (key in character) {
            arrFinal.push({key: key, value: character[key]});
            usedKeys.add(key);
        };
    };

    for (const property in character) {
        if (Object.hasOwnProperty.call(character, property)) {
            if (!(usedKeys.has(property))) {
                unused.push(property);
            };
        };
    };

    unused.sort();

    for (const i of unused) {
        arrFinal.push({key: i, value: character[i]});
    }
    return arrFinal;
}

export function specialAttacks(obj) {
    return obj.special.map(({id, name, icon, description = 'Описание недоступно'}) => ({
        id, name, icon, description
    }))
}