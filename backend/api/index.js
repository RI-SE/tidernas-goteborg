const express = require('express')
const cors = require('cors');
const rateLimit = require("express-rate-limit");
const { nextTick } = require('process');

// Init app
const app = express()
app.set('trust proxy', true);

// CORS Stuff
app.use(cors()); //Beware: CORS on all paths from all origins

//Set request rate limit
const limiter = rateLimit({
    windowMs: 1 * 1000, // 15 minutes
    max: 1 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);
app.use ((req,res, next) => {
    next();
})

app.get('/hello', (req,res) => {
    res.send('Heal the world!')
})

app.get('/', (req, res) => {

    //console.log(req)
    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['api.py', req.query.q]);

    pyProg.stdout.on('data', function(data) {
        res.send(data)
    });
})

app.listen(4000, () => console.log('Application listening on port 4000!'))