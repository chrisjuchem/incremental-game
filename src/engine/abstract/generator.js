import {clock} from "../clock";
import {BehaviorSubject} from "rxjs";

class Generator {
    constructor(baseTime, initialUpgrades=0) {
        this.baseTime = baseTime;
        this.upgrades = initialUpgrades;
        this.accumulated = 0;

        this.emitter = new BehaviorSubject(this.message());

        clock.subscribe((ms) => {
            this.accumulated += ms * this.upgrades;
            const generated = Math.floor(this.accumulated / this.baseTime);
            this.accumulated = this.accumulated % this.baseTime;
            if (generated) {
                this.generate(generated)
            }
            console.log(this.message())
            this.emitter.next(this.message())
        })
    }

    getRate() {
        return this.baseTime * this.upgrades / 1000;
    }

    generate(amount) {
        console.warn("Generator did not overwrite generate.");
    }

    upgrade(times) {
        this.upgrades += times;
        this.emitter.next(this.message())
    }

    message() {
        return {rate: this.getRate(), progress: this.accumulated / this.baseTime};
    }
}

export default Generator;