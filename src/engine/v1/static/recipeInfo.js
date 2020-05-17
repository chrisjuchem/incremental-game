import * as r from './resourceInfo'
import resourceCount from "../gamestate/resources";

class RecipeInfo {
    constructor(displayName, costs, rewards, time) {
        this.displayName = displayName;
        this._costs = costs;
        this._rewards = rewards;
        this._time = time; //ms
    }

    getTime(factoryConditions) {
        return this._time / factoryConditions.rateModifier;  // Todo: check upgrades
    }

    getCosts() {
        return this._costs;  // Todo: check upgrades
    }

    getRewards() {
        return this._rewards;  // Todo: check upgrades
    }

    // returns the number of times this recipe can be purchased, capped by maxAmount
    affordable(maxAmount=1) {
        return this.getCosts().reduce(
            (max, {resource, amount}) => Math.min(max, Math.floor(resourceCount[resource]/amount)),
            maxAmount
        );
    }

    buy(buyAmount=1) {
        if (this.affordable(buyAmount) < buyAmount) {
            return false;
        }

        this.getCosts().forEach(({resource, amount}) => resourceCount[resource] -= (buyAmount * amount));
        this.getRewards().forEach(({resource, amount}) => resourceCount[resource] += (buyAmount * amount));
        return true;
    }
}


export const RECIPE_NAME_FAB_X = 'fabricate_x';
export const RECIPE_NAME_CONVERT_Y = 'convert_y';

export const ALL_RECIPE_NAMES = [
    RECIPE_NAME_FAB_X,
    RECIPE_NAME_CONVERT_Y,
];

export default {
    [RECIPE_NAME_FAB_X]: new RecipeInfo(
        "Fabricate an X",
        [],
        [{
            resource: r.RESOURCE_NAME_X,
            amount: 1
        }],
        5000, //ms
    ),
    [RECIPE_NAME_CONVERT_Y]: new RecipeInfo(
        "Convert an X to a Y",
        [{
            resource: r.RESOURCE_NAME_X,
            amount: 1
        }],
        [{
            resource: r.RESOURCE_NAME_Y,
            amount: 1
        }],
        6000, //ms
    ),
};
