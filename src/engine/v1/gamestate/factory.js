import factoryInfo from '../static/factoryInfo'

class Factory {
    constructor(info) {
        this.info = info;
        this.recipe = null;
        // enabled
        // switching_for //time
        this.production = 0
    }

    tick(dt) {
        if (!this.recipe) {
            return;
        }

        this.production += dt;

        const baseTime = this.recipe.getTime(this.info.conditions);
        const generated = Math.floor(this.production / baseTime);

        //todo wait for resources instead of starting over
        this.production = this.production % baseTime;
        if (generated) {
            const affordable = this.recipe.affordable(generated);
            this.recipe.buy(affordable);
        }
    }
}

const factories = {}

Object.entries(factoryInfo).forEach(([key, val]) => {
    factories[key] = new Factory(val);
})

export default factories;
