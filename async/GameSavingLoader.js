import {GameSavingLoader} from './app.js';

(async () => {
    try {
        const g = await GameSavingLoader.load();
        console.log(g);
    } catch(error) {
        console.log(error);
    }
})