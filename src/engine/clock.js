import { interval, BehaviorSubject } from 'rxjs';
import { multicast } from 'rxjs/operators';

const clock = interval(1000).pipe(multicast(new BehaviorSubject()))
clock.connect();
export {clock};