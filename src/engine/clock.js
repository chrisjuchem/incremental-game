import {interval, BehaviorSubject} from 'rxjs';
import {multicast} from 'rxjs/operators';

const TICK_RATE = 30;
const TICK_LENGTH = 1000 / TICK_RATE;

const clock = interval(TICK_LENGTH).pipe(multicast(new BehaviorSubject()))
clock.connect();
export {clock, TICK_LENGTH};
