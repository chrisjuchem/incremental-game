import { clock, TICK_LENGTH } from "../clock";
import { BehaviorSubject } from "rxjs";

class ResourceConfig {
    constructor(name, initialCount, initialRate, ) {
        this.name = name;
        this.initialCount = initialCount || 0;
        this.initialRate = initialRate || 0;
    }
}

class Resource extends BehaviorSubject {
    constructor(config) {
        super(null); //TODO is this a problem if we dont send an update before subscriptions come in? composition instead mayhaps
        this.config = config;
        this.count = config.initialCount;
        this.rate = config.initialRate

        clock.subscribe(() => {
            this.count += TICK_LENGTH * this.rate / 1000.0;
            this.next(this)
        })
    }

    update(amnts) {
        if (!amnts) {
            return false;
        }
        this.updateCount(amnts.count);
        this.updateRate(amnts.rate);
    }

    updateCount(amnt) {
        if (!amnt) {
            return false;
        }
        this.count += amnt;
        this.next(this);
    }

    updateRate(amnt) {
        if (!amnt) {
            return false;
        }
        this.rate += amnt;
        this.next(this);
    }
}

const configArray = [
    new ResourceConfig('a'),
    new ResourceConfig('b'),
    new ResourceConfig('c', 2),
]

export const RESOURCES = configArray.reduce(
    (acc, config) => {
        acc[config.name] = new Resource(config);
        return acc;
    }, {})
