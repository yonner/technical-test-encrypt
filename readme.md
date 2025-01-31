
# The Task

The task took me 2 to 3 hours to complete, the reason why is that I wanted to design the encryption and decryption algorithms using a number of steps to make it easy to follow and debug.
I also wanted to allow the "BasicEncryptionService" to be independently testable (using the inbuilt node testing library) and also allow the "EncryptionManager" to be injected with other Encryption Services allowing for future extendability.

# Code structure

    EncryptionService.js           - This defines the contract for encryption services.
    BasicEncryptionService.js      - Over ride the EncryptionService and implements the encryption and decryption as per task description.
    BasicEncryptionService.test.js - Runs the tests to exercise the BasicEncryptionService.
    EncryptionManager.js           - This is the entry point manager to the EncryptionService.
    index.js                       - Entry point to the functionality.
    readme.md                      - This read me.

# Running the code

You can either Run the code using :-

    node index.js

or to encrypt a string from command line :-

    node index -e 'hello' 'aabb'

and to decrypt a string from command line :- 

    node index -d '-7T[^' 'aabb'

To Run the tests you need to do :

    node basicencryptionservice.test.js 

# Git Repo

You can clone this repo from my github repo using the following :-

    git clone https://github.com/yonner/technical-test-encrypt.git

# Requirements

node version > 16