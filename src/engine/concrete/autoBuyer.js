import {BehaviorSubject} from "rxjs";
import {RECIPES} from "./recipe";
import Buyable from "../abstract/buyable";
import Generator from "../abstract/generator";

// Right now this is built with 1 auto buyer / recipe  in mind
// If we would make a huge number of objects, we'll need to retool this but I envision just updating the rate

class AutoBuyGenerator extends Generator {
    constructor(autoBuyer, baseTime, initialUpgrades) {
        super(baseTime, initialUpgrades);
        this.autoBuyer = autoBuyer;
    }

    generate(amount) {
        this.autoBuyer.recipe.buy(amount)
    }
}

class AutoBuyer extends Buyable {
    constructor(recipe, baseTime, price) {
        super(price)
        if (typeof recipe === "string") {
            recipe = RECIPES[recipe];
        }
        self.recipe = recipe;
        self.generator = new AutoBuyGenerator(baseTime, 0);
    }

    giveBuyResult(amount) {
        self.generator.upgrade(amount);
    }
}

export default AutoBuyer;
