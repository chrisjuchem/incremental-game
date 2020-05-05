import {RESOURCES} from "../concrete/resource";

class Buyable {
    constructor(price) {
        this.price = price;
    }

    isAffordable() {
        return Object.entries(this.price).reduce(
            (acc, [type, amnt]) => acc && amnt <= RESOURCES[type].count,
            true
        );
    }

    buy() {
        if (!this.isAffordable()) {
            return false;
        }

        Object.entries(this.price).forEach(([type, amnt]) => RESOURCES[type].updateCount(-amnt));
        this.giveBuyResult();
    }

    giveBuyResult() {
        console.warn("Buyable did not overwrite giveResult.")
    }
}

export default Buyable;