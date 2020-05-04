import {RESOURCES} from "./resource";

class Recipe {
    constructor(name, price, result) {
        this.name = name;
        this.price = price;
        this.result = result;
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
        Object.entries(this.result).forEach(([type, result]) => RESOURCES[type].update(result));
    }
}

const recipeArray = [
    new Recipe("a++", {c:2}, {a:{rate:1}}),
    new Recipe("b++", {c:10}, {b:{rate:1}}),
    new Recipe("click", {}, {b:{count:1}}),
    new Recipe("convert", {a:5, b:5}, {c:{count:1}}),
];

export const RECIPES = recipeArray.reduce((acc, recipe) => {
    acc[recipe.name] = recipe;
    return acc;
},{});