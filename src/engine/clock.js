import {interval} from 'rxjs';
import {mapTo, publishBehavior} from 'rxjs/operators';

const TICK_RATE = 30;
const TICK_LENGTH = Math.floor(1000 / TICK_RATE);

const clock = interval(TICK_LENGTH).pipe(mapTo(TICK_LENGTH), publishBehavior(0))
clock.connect();
export {clock};
