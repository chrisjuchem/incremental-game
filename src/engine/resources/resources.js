import {clock, TICK_LENGTH} from "../clock";
import {BehaviorSubject} from 'rxjs';
import {ALL_RESOURCES} from "./resource";

const resources = ALL_RESOURCES.reduce((acc, resource) => {
    acc.raw[resource.name] = resource.initialCount;
    acc.generation[resource.name] = resource.initialRate;
    return acc;
}, {raw: {}, generation: {}})

function _set_resources(data) {
    Object.assign(resources.raw, data.raw)
    Object.assign(resources.generation, data.generation)
}

const resource_emitter = new BehaviorSubject(resources);
// resource_emitter.subscribe(x => console.log(x))

function sendUpdate() {
    resource_emitter.next(resources);
}

// Ensure we're not about to spend resources we don't have
function updateValid(updateRaw) {
    return Object.entries(updateRaw).reduce(
        (acc, [type, amnt]) => acc && -amnt <= resources.raw[type],
        true
    );
}

function updateResources(updateRaw, updateGeneration) {
    if (!updateValid(updateRaw)) {
        return false;
    }

    Object.entries(updateRaw).forEach(([type, amnt]) => resources.raw[type] += amnt);
    if (updateGeneration) {
        Object.entries(updateGeneration).forEach(([type, amnt]) => resources.generation[type] += amnt);
    }

    sendUpdate();
    return true;
}

clock.subscribe(() => {
    for (let [resource, rate] of Object.entries(resources.generation)) {
        resources.raw[resource] += TICK_LENGTH * rate / 1000.0;
    }

    sendUpdate()
})

export {resource_emitter, updateResources, resources as _resources, _set_resources};
