import {RESOURCES} from "./resource";
import Buyable from "../abstract/buyable";

class Recipe extends Buyable{
    constructor(name, price, result) {
        super(price)
        this.name = name;
        this.result = result;
    }

    giveBuyResult() {
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
