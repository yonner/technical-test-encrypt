const BasicEncryptionService = require('./BasicEncryptionService');
const EncryptionManager = require('./EncryptionManager');

const encryptionService = new BasicEncryptionService();
const encryptionManager = new EncryptionManager(encryptionService);

if (process.argv.length > 2) {
    
    if (process.argv[2] == '-e') {
        const encryptedText = encryptionManager.encryptText(process.argv[3], process.argv[4]);
        console.log(`encryptedText: [${encryptedText}]`);
    }

    if (process.argv[2] == '-d') {
        const decryptedText = encryptionManager.decryptText(process.argv[3], process.argv[4]);
        console.log(`decryptedText: [${decryptedText}]`);
    }

} else {
    // Example usage with encryption and decryption
    const encryptedText = encryptionManager.encryptText(`HelloWorld`, `aabbcc`);
    const decryptedText = encryptionManager.decryptText(encryptedText, `aabbcc`);

    console.log(`encryptedText: ${encryptedText}`);
    console.log(`decryptedText: ${decryptedText}`);
}