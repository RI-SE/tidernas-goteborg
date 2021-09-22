const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors()); //Beware: CORS on all paths from all origins

app.get('/', (req, res) => {

    //console.log(req)
    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['test.py', req.query.q]);

    pyProg.stdout.on('data', function(data) {
        console.log(data.toString());
        res.send(data)
    });
})

app.listen(4000, () => console.log('Application listening on port 4000!'))