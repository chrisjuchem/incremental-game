import {RESOURCES} from "./resources/resource";


const SAVE_KEY = "saved-game";

function saveGame() {
    const data = Object.entries(RESOURCES).reduce((acc, [name, resource]) => {
        acc[name] = {count: resource.count, rate: resource.rate};
        return acc;
    }, {})
    console.log(data);

    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
}

// Assumes a valid save
function loadGame() {
    const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
    Object.entries(parsed).forEach(([name, data]) => {
        RESOURCES[name].count = data.count;
        RESOURCES[name].rate = data.rate;
    })
}

function saveValid() {
    const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
    return !!parsed && Object.entries(parsed).reduce((acc, [name, data]) => {
        return !!(acc && RESOURCES[name] && data && data.count !== undefined && data.rate !== undefined);
    }, true);
}

export { saveGame, loadGame, saveValid };
