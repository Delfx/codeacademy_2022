const os = require('os');

console.log('Processors name: ' + os.cpus()[0].model);
console.log('Cores: ' + os.cpus().length);
