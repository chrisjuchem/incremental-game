import {interval} from 'rxjs';
import {pluck, publishBehavior, timeInterval} from 'rxjs/operators';

const TICK_RATE = 30;
const TICK_LENGTH = Math.floor(1000 / TICK_RATE);

const clock = interval(TICK_LENGTH).pipe(
    timeInterval(),
    pluck('interval'),
    publishBehavior(0)
)
clock.connect();
export {clock};
