import {clock} from "../clock";

class Generator {
    constructor(baseTime, initialUpgrades=0) {
        this.baseTime = baseTime;
        this.upgrades = initialUpgrades;
        this.accumulated = 0;

        clock.subscribe(this.tick)
    }

    tick(ms){
        this.accumulated += ms * this.upgrades;
        const generated = Math.floor(this.accumulated / this.baseTime);
        this.accumulated = this.accumulated % this.baseTime;
        if (generated) {
            this.generate(generated)
        }
    }

    generate(amount) {
        console.warn("Generator did not overwrite generate.");
    }

    upgrade(times) {
        console.log(times);
        this.upgrades += times;
    }
}

export default Generator;