
import {_resources, _set_resources} from "./resources/resources";

const COOKIE_KEY = "saved-game";

function saveGame() {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(_resources));
}

function loadGame() {
    const parsed = JSON.parse(localStorage.getItem(COOKIE_KEY));
    if(saveValid(parsed)) {
        _set_resources(parsed);
    }
}

function saveValid(parsed) {
    if (!parsed) {
        parsed = JSON.parse(localStorage.getItem(COOKIE_KEY));
    }
    return !!parsed && !!parsed.raw && !!parsed.generation;
}

export { saveGame, loadGame, saveValid };
