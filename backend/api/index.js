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
    const pyProg = spawn('python', ['../../../Riksarkivet/Backend/api.py', '--query', req.query.q]);

    const timeout = setTimeout(function(){
        pyProg.kill()
        res.sendStatus(500)
    }, 5000);
    
    pyProg.stdout.on('data', function(data) {
        clearTimeout(timeout)
        res.send(data)
    });

})

// Queued api calls
app.get('/queue', (req, res) => {
    que.add(doSpawn.bind(null, {req, res})).then(
        e => { //WHY IS REJECT FIRST!?
            //console.log("ERROR", e)
        }, r => {  //WHY IS RESOLVE SECOND!?
            //console.log("RESPONSE",r)
        }
    );

    // TODO?
    // Another timeout checking if the total api call takes too long. 

})

function doSpawn (p) {
    var promise = new Promise((reject,resolve) => {
        const { spawn } = require('child_process');
        const pyProg = spawn('python', ['~/Riksarkivet/backend/apiTest.py', '--query', p.req.query.q]);

        const timeout = setTimeout(function(){
            //console.log("TIMEOUT")
            pyProg.kill()
            p.res.sendStatus(500)
            reject()
        }, 5000);

        pyProg.stdout.on('data', function(data) {
            //console.log("DONE")
            clearTimeout(timeout)
            p.res.send(data)
            resolve(data);
        });

        
    });
    return promise;
}

app.listen(4000, () => console.log('Application listening on port 4000!'))