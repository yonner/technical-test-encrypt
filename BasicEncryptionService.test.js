
const {test, describe} = require(`node:test`);
const assert = require(`node:assert`);
const BasicEncryptionService = require(`./BasicEncryptionService`);

describe('BasicEncryptionService', () =>{
    const encryptionService = new BasicEncryptionService();

    test('should encrypt correctly', ()=>{

        const encryptedText = encryptionService.encrypt("HelloWorld", `aabbcc`);

        assert.strictEqual(encryptedText, `j5QXl[nx{~`);

    });

    test('should decrypt correctly', ()=>{

        const decryptedText = encryptionService.decrypt(`j5QXl[nx{~`, `aabbcc`);

        assert.strictEqual(decryptedText, `HelloWorld`);

    });

    test('Should encrypt to given example', () =>{
            
        const encryptedText = encryptionService.encrypt(`Hello, my name is John. How are you today?`, `SUPERMAN`);

        // Note: we need to escape \w with another backslash
        assert.strictEqual(encryptedText, `{F8ZSZjPy9l**fC%T$+poR* qH9W=7<\\w~iB'f$rN-`);

    });

    test('Should decrypt from given example', () =>{
        
        // Note: we need to escape \w with another backslash
        const encryptedText = encryptionService.decrypt(`{F8ZSZjPy9l**fC%T$+poR* qH9W=7<\\w~iB'f$rN-`, `SUPERMAN`);

        assert.strictEqual(encryptedText, `Hello, my name is John. How are you today?`);

    });
});