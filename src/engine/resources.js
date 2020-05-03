import {clock, TICK_LENGTH} from "./clock";
import {BehaviorSubject} from 'rxjs';


const resources = {a: 0, b: 0, c: 10}

const perSecond = {a: 1, c: 0.2}

const resource_emitter = new BehaviorSubject(resources);//clock.pipe(map(() => resources))

// resource_emitter.subscribe(x => console.log(x))

function addResource(type, amnt) {
    resources[type] += amnt
    resource_emitter.next(resources)
}

clock.subscribe(() => {
    for (let [resource, rate] of Object.entries(perSecond)) {
        resources[resource] += TICK_LENGTH * rate / 1000.0
    }

    resource_emitter.next(resources)
})

export {resource_emitter, addResource};
