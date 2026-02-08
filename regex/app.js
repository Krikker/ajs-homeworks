export class Validator {
    validateUsername(name) {
        return /^[^-_0-9](?!.*\d{4,})[-_a-zA-Z0-9]*[^-_0-9]$/.test(name);
    }

    validatePhoneNumbers(number) {
        if (typeof number !== 'string') {
            throw new Error('Номер не является строкой');
        }
        const clean = number.replace(/[- ()_]/g, '');
        if (clean.startsWith('8')) {
            return clean.replace('8', '+7');
        }
        return clean;
    }
}

const g = new Validator();
console.log(g.validatePhoneNumbers('8 (927) 000-00-00'))