
// import {resources, set_resources} from "./resources/resources";

// const SAVE_KEY = "saved-game";

function saveGame() {
    // localStorage.setItem(SAVE_KEY, JSON.stringify(resources));
}

function loadGame() {
    // const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
    // if(saveValid(parsed)) {
    //     set_resources(parsed);
    // }
}

function saveValid(parsed) {
    return false
    // if (!parsed) {
    //     parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
    // }
    // return !!parsed && !!parsed.count && !!parsed.rate;
}

export { saveGame, loadGame, saveValid };
