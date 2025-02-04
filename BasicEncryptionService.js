const EncryptionService = require('./EncryptionService');

class BasicEncryptionService extends EncryptionService {

    #primeNumbers = [];

    constructor() {
        super();

        this.#generatePrimeNumbers(256);
    }

    #generatePrimeNumbers(n) {
        this.#primeNumbers.push(0);
        let num = 2;
        while (this.#primeNumbers.length < n) {
            if (this.#primeNumbers.every(p => num % p !== 0)) {
                this.#primeNumbers.push(num);
            }
            num++;
        }
    }

    #sumPrimeNumberPositionAndPlainTextValue(prime, position, plainText) {
        return prime + position + plainText.charCodeAt(0);
    }

    #sumEncryptionKeyValueAndPosition(key, position) {
        return key.charCodeAt(0) + position;
    }

    #negatePrimeNumberAndPositionFromEncryptedValue(encryptedTextCharacter, prime, position) {
        return encryptedTextCharacter.charCodeAt(0) - prime - position;
    }
    
    #getPrimeNumber(index) {
        const wrappedIndex = index % this.#primeNumbers.length;
        return this.#primeNumbers[wrappedIndex];
    }

    #wrapToValidRange(value) {
        while (value < 32) {
            value += 95;
        }
        while (value > 126) {
            value -= 95;
        }
        return value;
    }

    encrypt(plainText, key) {
        if (key === undefined || key.length === 0) {
            console.log("Encryption key is empty");
            return "";
        }
    
        let encryptedText = '';
        let encryptionKeyIndex = 0;
    
        for (let i = 0; i < plainText.length; i++) {
            
            var step1 = this.#sumEncryptionKeyValueAndPosition(key[encryptionKeyIndex], i);

            var step2 = this.#getPrimeNumber(step1);

            var step3 = this.#sumPrimeNumberPositionAndPlainTextValue(step2, i, plainText[i]);

            var step4 = this.#wrapToValidRange(step3);

            encryptedText += String.fromCharCode(step4);
            
            encryptionKeyIndex = (encryptionKeyIndex + 1) % key.length;
        }
    
        return encryptedText;
    }

    decrypt(encryptedText, key) {
        if (key === undefined || key.length === 0) {
            console.log("Decryption key is empty");
            return "";
        }
    
        let decryptedText = '';
        let decryptionKeyIndex = 0;
    
        for (let i = 0; i < encryptedText.length; i++) {    
            let step1 = this.#getPrimeNumber(i + key[decryptionKeyIndex].charCodeAt(0));

            let step2 = this.#negatePrimeNumberAndPositionFromEncryptedValue(encryptedText[i], step1, i);
    
            let step3 = this.#wrapToValidRange(step2);
    
            decryptedText += String.fromCharCode(step3);
    
            decryptionKeyIndex = (decryptionKeyIndex + 1) % key.length;
        }
    
        return decryptedText;
    }
}

module.exports = BasicEncryptionService;



