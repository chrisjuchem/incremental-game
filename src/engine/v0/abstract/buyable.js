import {RESOURCES} from "../concrete/resource";

class Buyable {
    constructor(price) {
        this.price = price;
    }

    isAffordable(amount=1) {
        return Object.entries(this.price).reduce(
            (acc, [type, amnt]) => acc && ((amnt * amount) <= RESOURCES[type].count),
            true
        );
    }

    buy(amount=1) {
        if (!this.isAffordable(amount)) {
            return false;
        }

        Object.entries(this.price).forEach(([type, amnt]) => RESOURCES[type].updateCount(-amnt * amount));
        this.giveBuyResult(amount);
    }

    giveBuyResult(amount) {
        console.warn("Buyable did not overwrite giveResult.")
    }
}

export default Buyable;