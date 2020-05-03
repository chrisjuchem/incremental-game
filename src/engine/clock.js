import { interval, BehaviorSubject } from 'rxjs';
import { multicast } from 'rxjs/operators';

const clock_obs = interval(1000);
const clock = clock_obs.pipe(multicast(new BehaviorSubject()))
clock.connect();
export {clock};