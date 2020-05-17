import {clock} from "../../clock";
import {map} from 'rxjs/operators'
import resourceCount from "./resources";
import factories from "./factory";
import {FACTORY_NAME_VERDANSK, FACTORY_NAME_VERDANSK_2} from "../static/factoryInfo";
import {RECIPE_NAME_CONVERT_Y, RECIPE_NAME_FAB_X} from "../static/recipeInfo";
import resourceInfo from "../static/resourceInfo";

const STARTING_CASH=100;

export let cash = STARTING_CASH;


// Temp
factories[FACTORY_NAME_VERDANSK].setRecipeByName(RECIPE_NAME_FAB_X);
factories[FACTORY_NAME_VERDANSK_2].setRecipeByName(RECIPE_NAME_CONVERT_Y);


function tickFactories(dt) {
    Object.values(factories).forEach(factory => factory.tick(dt))
}

function capResources() {
    Object.entries(resourceInfo).forEach(([name, r]) => {
        const excess = resourceCount[name] - r.getCap();
        if (excess > 0) {
            cash += excess * r.getSellPrice();
            resourceCount[name] -= excess;
        }
    });
}

function doTick(dt) {
    tickFactories(dt);
    capResources();
}

const gamestateEmitter = clock.pipe(map(dt => {
    console.log(dt) // x 5
    doTick(dt);
    return {
        cash: cash,
        factories: factories,
        resources: resourceCount
    }
}));

export default gamestateEmitter;