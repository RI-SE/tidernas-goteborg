const express = require('express')
const cors = require('cors');
const rateLimit = require("express-rate-limit");
const Queue = require('promise-queue')

// Init app
const app = express()
app.set('trust proxy', true);

// CORS Stuff
app.use(cors()); //Beware: CORS on all paths from all origins

// Set request rate limit
const limiter = rateLimit({
    windowMs: 1 * 1000, // 15 minutes
    max: 3 // limit each IP to 100 requests per windowMs
});
app.use(limiter);
app.use ((req,res, next) => {
    next();
})

// Init request queue
var maxConcurrent = 1;
var maxQueue = Infinity;
var que = new Queue(maxConcurrent, maxQueue);

app.get('/hello', (req,res) => {
    res.send('Heal the world!')
})

app.get('/', (req, res) => {

    console.log("Query normal")

    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['api.py', req.query.q]);

    pyProg.stdout.on('data', function(data) {
        res.send(data)
    });
})

app.get('/queue', (req, res) => {
    console.log("Query queue")
    //res.send('QUEUE')
    que.add(doSpawn.bind(null, {req:req, res: res}));
})

function doSpawn (p) {
    var promise = new Promise((reject,resolve) => {
        const { spawn } = require('child_process');
        const pyProg = spawn('python', ['api.py', p.req.query.q]);

        pyProg.stdout.on('data', function(data) {
            p.res.send(data)
            resolve();
        });
    });
    return promise;
}

app.listen(4000, () => console.log('Application listening on port 4000!'))