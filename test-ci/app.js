export function healthBar(character) {
    if (character.health > 50) {
        return 'healthy';
    } else if (character.health >= 15) {
        return 'wounded';
    } else {
        return 'critical';
    }
}

export function sortByHealth(teamStat) {
    let remain = teamStat;
    let sortArr = [];
    while (remain.length != 0) {
        let i = 0;
        for (let j = 1; j < remain.length; j++) {
            if (remain[j].health > remain[i].health) {
                i = j;
            };
        };
        sortArr.push(remain[i]);
        remain.splice(i, 1);
    };
    return sortArr;
}

import fetchData from './http.js';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`; 
  }
  return `Информация об уровне временно недоступна`;
}