const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Please enter file name : ', (fileName) => {
    rl.question('Please enter your text to write in file : ', (textInFile) => {

        if (fileName && textInFile) {
            if (fs.existsSync(fileName + '.txt')) {
                fs.truncate(fileName + '.txt', 0, function () { console.log('File deleted') })
            }
            fs.appendFile(fileName + '.txt', textInFile, function (err) {
                if (err) {
                    // append failed
                    console.log(err);
                } else {
                    // done
                    console.log('File created');
                }
            })

            rl.close();
        } else {
            console.log('Please fill all inputs');
            rl.close();
        }

    });
});
