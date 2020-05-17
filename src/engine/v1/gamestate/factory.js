import factoryInfo from '../static/factoryInfo'
import recipeInfo from "../static/recipeInfo";

class Factory {
    constructor(info) {
        this.info = info;
        this.recipe = null;
        // enabled
        // switching_for //time
        this.production = 0
    }

    setRecipeByName(recipeName) {
        this.recipe = recipeInfo[recipeName]
    }

    tick(dt) {
        if (!this.recipe) {
            return;
        }

        this.production += dt;

        const baseTime = this.recipe.getTime(this.info.conditions);
        const generated = Math.floor(this.production / baseTime);

        if (generated) {
            const affordable = this.recipe.affordable(generated);
            if (affordable) {
                this.recipe.buy(affordable);
            }
            // spend only the production that was used
            this.production -= affordable * baseTime;
        }
        // cap at 100%
        this.production = Math.min(this.production, baseTime);
    }
}

const factories = {}

Object.entries(factoryInfo).forEach(([key, val]) => {
    factories[key] = new Factory(val);
})

export default factories;
