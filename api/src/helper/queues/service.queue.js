import Bull from 'bull';
import process3 from '../processes/service.process';

const serviceQueue = new Bull('service');

//process
serviceQueue.process(process3);

//init
const queue3 = (data) => {
    serviceQueue.add(data, {
        attempts: 5,//The total number of attempts to try the job until it completes
    });
}

export {
    queue3,
}