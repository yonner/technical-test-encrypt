class EncryptionManager {

    constructor(encryptionService) {
        this.encryptionService = encryptionService;
    }

    encryptText(plainText, encryptionKey) {
        return this.encryptionService.encrypt(plainText, encryptionKey);
    }

    decryptText(encryptedText, encryptionKey) {
        return this.encryptionService.decrypt(encryptedText, encryptionKey);
    }
}

module.exports = EncryptionManager;