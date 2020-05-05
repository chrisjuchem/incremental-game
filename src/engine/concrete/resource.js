import { BehaviorSubject } from "rxjs";
import Generator from "../abstract/generator";

class ResourceGenerator extends Generator {
    constructor(resource, initialRate) {
        super(1000, initialRate);
        this.resource = resource;
    }

    generate(amount) {
        this.resource.updateCount(amount)
    }
}

class Resource {
    constructor(name, initialCount=0, initialRate=0) {
        this.name = name;
        this.count = initialCount;
        this.generator = new ResourceGenerator(this, initialRate);

        this.emitter = new BehaviorSubject({count:initialCount, rate:initialRate});
    }

    broadcast() {
        this.emitter.next(this.serialize())
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

        this.broadcast();
    }

    updateRate(amnt) {
        if (!amnt) {
            return false;
        }
        this.generator.upgrade(amnt);

        this.broadcast();
    }

    serialize() {
        return {
            count: this.count,
            rate: this.generator.upgrades //this.generator.baseTime * this.generator.upgrades / 1000.0,
        };
    }

    deserializable(data) {
        return !!(data && data.count !== undefined && data.rate !== undefined);
    }

    deserialize(data) {
        this.count = data.count;
        this.generator.upgrades = data.rate;
        this.broadcast();
    }
}

const resourceArray = [
    new Resource('a'),
    new Resource('b'),
    new Resource('c', 2),
]

export const RESOURCES = resourceArray.reduce(
    (acc, r) => {
        acc[r.name] = r;
        return acc;
    }, {})
