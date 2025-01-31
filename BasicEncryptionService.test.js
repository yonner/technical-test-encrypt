
const {test, describe} = require(`node:test`);
const assert = require(`node:assert`);
const BasicEncryptionService = require(`./BasicEncryptionService`);

describe('BasicEncryptionService', () =>{
    const encryptionService = new BasicEncryptionService();

    test('should encrypt correctly', ()=>{

        const encryptedText = encryptionService.encrypt("HelloWorld", "aabbcc");

        assert.strictEqual(encryptedText, 'l7T[p_pz~"');

    });

    test('should decrypt correctly', ()=>{

        const decryptedText = encryptionService.decrypt('l7T[p_pz~"', "aabbcc");

        assert.strictEqual(decryptedText, "HelloWorld");

    });
});