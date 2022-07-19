const os = require('os');
const express = require('express')
const app = express()
const port = 3000


function convertMemory() {
    // Convert total memory to kb, mb and gb
    let total_memory = os.totalmem();
    let total_mem_in_kb = total_memory / 1024;
    let total_mem_in_mb = total_mem_in_kb / 1024;
    let total_mem_in_gb = total_mem_in_mb / 1024;

    total_mem_in_kb = Math.floor(total_mem_in_kb);
    total_mem_in_mb = Math.floor(total_mem_in_mb);
    total_mem_in_gb = Math.floor(total_mem_in_gb);

    total_mem_in_mb = total_mem_in_mb % 1024;
    total_mem_in_kb = total_mem_in_kb % 1024;
    total_memory = total_memory % 1024;

    const ramOutput = ("Total memory: " + total_mem_in_gb + "GB "
    + total_mem_in_mb + "MB " + total_mem_in_kb
    + "KB and " + total_memory + "Bytes");

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