const express = require('express')
const Queue = require('better-queue');
const cors = require('cors')

const app = express()
app.use(cors())
const port = 3001

const waitBlocking = (miliseconds) => {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliseconds);
}

const waitNonBlocking = (miliseconds) => {
    return new Promise(resolve => setTimeout(() => resolve(), miliseconds));
}

const doA = () => {
    waitBlocking(10000);
}

const doB = async () => {
    await waitNonBlocking(1000);
}
const queues = new Queue(async (task, callback) => {
    console.log('Queue: ', task);
    doA();
    await doB();
    callback();

}, { concurrent: 3 }); //maxRetries: 10, retryDelay: 1000,
//cancelIfRunning: You can also set cancelIfRunning to true. This will cancel a running task if a task with the same ID is pushed onto the queue.
//concurrent: Now the queue will allow 3 tasks running at the same time. (By default, we handle tasks one at a time.)
//filo: You can also turn the queue into a stack by turning on filo.
//batchSize - The number of tasks (at most) that can be processed at once. Defaults to 1.
queues.on('task_progress', (taskId, completed, total) => {
    console.log("task_progress");
})
queues.on('task_finish', (taskId, result) => {
    console.log("task_finish");
    // queues.destroy();
})
queues.on('task_failed', (taskId, error) => {
    console.log("task_failed");
})

queues.on('batch_progress', () => {
    console.log("batch_progress");
})

let index = 1;
app.get('/', async (req, res) => {
    console.log("max: ", queues.getMaxListeners());
    console.log("star: ", queues.getStats());
    queues.push({ id: `${new Date().getTime()}` })
        .on('finish', (result) => {
            console.log('DONE TASK');
            console.log("star: ", queues.getStats());
            res.send('Hello World!')
        })
        .on('failed', (err) => {

        })
        .on('progress', (progress) => {
            // progress.eta - human readable string estimating time remaining
            // progress.pct - % complete (out of 100)
            // progress.complete - # completed so far
            // progress.total - # for completion
            // progress.message - status message
        })

    // res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})