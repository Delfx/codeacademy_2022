const os = require('os');
const express = require('express')
const app = express()
const port = 3000


function convertMemory() {
    // Convert total memory to kb, mb and gb
    let totalMemory = os.totalmem();
    let totalMemInKb = totalMemory / 1024;
    let totalMemInMb = totalMemInKb / 1024;
    let totalMemInGb = totalMemInMb / 1024;

    totalMemInKb = Math.floor(totalMemInKb);
    totalMemInMb = Math.floor(totalMemInMb);
    totalMemInGb = Math.floor(totalMemInGb);

    totalMemInMb = totalMemInMb % 1024;
    totalMemInKb = totalMemInKb % 1024;
    totalMemory = totalMemory % 1024;

    const ramOutput = ("Total memory: " + totalMemInGb + "GB "
    + totalMemInMb + "MB " + totalMemInKb
    + "KB and " + totalMemory + "Bytes");

    return ramOutput;
}

app.get('/os', (req, res) => {
    res.send(`Os version:  ${JSON.stringify(os.version())}`)
})

app.get('/cpu', (req, res) => {
    res.send(`CPU name: ${JSON.stringify(os.cpus())}`)
})

app.get('/ram', (req, res) => {
    res.send(convertMemory())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})