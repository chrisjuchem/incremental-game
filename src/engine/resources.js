import {clock, TICK_LENGTH} from "./clock";
import {BehaviorSubject} from 'rxjs';

const raw = {
    a: 0,
    b: 0,
    c: 2,
};

// per second
const generation = {
    a: 0,
    b: 0,
    c: 0,
};

const resources = {
    raw:raw,
    generation: generation,
}
function _set_resources(data) {
    Object.assign(raw, data.raw)
    Object.assign(generation, data.generation)
}

const resource_emitter = new BehaviorSubject(resources);
// resource_emitter.subscribe(x => console.log(x))

function sendUpdate() {
    resource_emitter.next(resources);
}

// Ensure we're not about to spend resources we don't have
function updateValid(updateRaw) {
    return Object.entries(updateRaw).reduce(
        (acc, [type, amnt]) => acc && -amnt <= raw[type],
        true
    );
}

function updateResources(updateRaw, updateGeneration) {
    if (!updateValid(updateRaw)) {
        return false;
    }

    Object.entries(updateRaw).forEach(([type, amnt]) => raw[type] += amnt);
    if (updateGeneration) {
        Object.entries(updateGeneration).forEach(([type, amnt]) => generation[type] += amnt);
    }

    sendUpdate();
    return true;
}

clock.subscribe(() => {
    for (let [resource, rate] of Object.entries(generation)) {
        resources.raw[resource] += TICK_LENGTH * rate / 1000.0;
    }

    sendUpdate()
})

export {resource_emitter, updateResources, resources as _resources, _set_resources};
