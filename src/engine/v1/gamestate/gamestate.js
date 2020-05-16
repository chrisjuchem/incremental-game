import {clock} from "../../clock";
import {map} from 'rxjs/operators'
import resourceCount from "./resources";
import factories from "./factory";

const STARTING_CASH=100;

export let cash = STARTING_CASH;


function tickFactories(dt) {
    Object.values(factories).forEach(factory => factory.tick(dt))
}

function doTick(dt) {
    tickFactories(dt)
}

const gamestateEmitter = clock.pipe(map(dt => {
    doTick(dt);
    return {
        cash: cash,
        factories: {},
        resources: resourceCount
    }
}));

export default gamestateEmitter;