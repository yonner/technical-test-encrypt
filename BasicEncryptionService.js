const EncryptionService = require('./EncryptionService');

class BasicEncrptionService extends EncryptionService {

    #primeNumbers = [];

    constructor()
    {
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

    #sumCharacterCodeKeyCodeAndPosition(originalChar, key, position) {
        return originalChar.charCodeAt(0) + key.charCodeAt(0) + position;
    }

    #negateDecyptedSumKeyCodeAndPosition(decyptedSum, key, position) {
        return decyptedSum - key.charCodeAt(0) - position;
    }

    #getPrimeNumber(position, keyCharCode) {
        const index = (position + keyCharCode) % this.#primeNumbers.length;
        return this.#primeNumbers[index];
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

    encrypt(plainText, key)
    {
        if (key === undefined || key.length === 0) {
            console.log("Encryption key is empty");
            return "";
        }
    
        let encryptedText = '';
        let encryptionKeyIndex = 0;
    
        for (let i = 0; i < plainText.length; i++) {
            
            var step1 = this.#sumCharacterCodeKeyCodeAndPosition(plainText[i], key[encryptionKeyIndex], i);

            var step2 = this.#getPrimeNumber(i, key[encryptionKeyIndex].charCodeAt(0));

            var step3 = step1 + step2;

            var step4 = this.#wrapToValidRange(step3);

            encryptedText += String.fromCharCode(step4);
            
            encryptionKeyIndex = (encryptionKeyIndex + 1) % key.length;
        }
    
        return encryptedText;
    }

    decrypt(encryptedText, key)
    {
        if (key === undefined || key.length === 0) {
            console.log("Encryption key is empty");
            return "";
        }
    
        let decryptedText = '';
        let decryptionKeyIndex = 0;
    
        for (let i = 0; i < encryptedText.length; i++) {
            
            var step1 = this.#getPrimeNumber(i, key.charCodeAt(decryptionKeyIndex));

            var step2 = encryptedText.charCodeAt(i) - step1;

            var step3 = this.#negateDecyptedSumKeyCodeAndPosition(step2, key[decryptionKeyIndex], i);

            var step4 = this.#wrapToValidRange(step3);
    
            decryptedText += String.fromCharCode(step4);
            
            decryptionKeyIndex = (decryptionKeyIndex + 1) % key.length;
        }
    
        return decryptedText;
    }
}

module.exports = BasicEncrptionService;



