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

// Non-queued api calls
app.get('/', (req, res) => {

    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['api.py', req.query.q]);

    pyProg.stdout.on('data', function(data) {
        res.send(data)
    });

    setTimeout(function(){
        pyProg.kill()
        res.sendStatus(500)
    }, 15000);
})

// Queued api calls
app.get('/queue', (req, res) => {
    que.add(doSpawn.bind(null, req.query.q)).then(
        e => { //WHY IS REJECT FIRST!?
            //console.log("ERROR", e)
            res.sendStatus(500)
        }, r => {  //WHY IS RESOLVE SECOND!?
            //console.log("RESPONSE",r)
            res.send(r)
        }
    );
})

function doSpawn (query) {
    var promise = new Promise((reject,resolve) => {
        const { spawn } = require('child_process');
        const pyProg = spawn('python', ['api.py', query]);

        const timeout = setTimeout(function(){
            //console.log("TIMEOUT")
            pyProg.kill()
            reject()
        }, 15000);

        pyProg.stdout.on('data', function(data) {
            //console.log("DONE")
            clearTimeout(timeout)
            resolve(data);
        });

        
    });
    return promise;
}

app.listen(4000, () => console.log('Application listening on port 4000!'))