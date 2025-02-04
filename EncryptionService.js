class EncryptionService {

    encrypt(plainText, key) {
        throw new Error(`encrypt method must be implemented`);
    }

    decrypt(encryptedText, key) {
        throw new Error(`decrypt method must be implemented`);
    }
    
}

module.exports = EncryptionService;