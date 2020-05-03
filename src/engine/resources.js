import { clock } from "./clock";
import { BehaviorSubject } from 'rxjs';


const resources = {a: 0, b: 0, c: 10}

const resource_emitter = new BehaviorSubject(resources);//clock.pipe(map(() => resources))

// resource_emitter.subscribe(x => console.log(x))

function addResource(type, amnt) {
  resources[type] += amnt
  resource_emitter.next(resources)
}

clock.subscribe(() => addResource('a', 1))

export {resource_emitter, addResource};