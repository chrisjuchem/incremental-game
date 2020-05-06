import {RESOURCES} from "./concrete/resource";

const SAVE_KEY = "saved-game";

function saveGame() {
    const data = Object.entries(RESOURCES).reduce((acc, [name, resource]) => {
        acc[name] = resource.serialize();
        return acc;
    }, {})
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
}

// Assumes a valid save
function loadGame() {
    const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
    Object.entries(parsed).forEach(([name, data]) => {
        RESOURCES[name].deserialize(data);
    })
}

function saveValid() {
    const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
    return !!parsed && Object.entries(parsed).reduce((acc, [name, data]) => {
        return !!(acc && RESOURCES[name] && RESOURCES[name].deserializable(data));
    }, true);
}

export { saveGame, loadGame, saveValid };
