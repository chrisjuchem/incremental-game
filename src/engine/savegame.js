
import {Subject} from "rxjs";

const SAVE_KEY = "saved-game";

const saveGameObserver = new Subject();
const saveGameEvents = {
    SAVE_GAME_EVENT: 'SAVE_GAME_EVENT',
    LOAD_GAME_EVENT: 'LOAD_GAME_EVENT'
};

function saveGame() {
    // const data = Object.entries(RESOURCES).reduce((acc, [name, resource]) => {
    //     acc[name] = resource.serialize();
    //     return acc;
    // }, {})
    // localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    // saveGameObserver.next('SAVE_GAME_EVENT')
}

// Assumes a valid save
function loadGame() {
    // const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
    // Object.entries(parsed).forEach(([name, data]) => {
    //     RESOURCES[name].deserialize(data);
    // })
    // saveGameObserver.next('LOAD_GAME_EVENT')
}

function saveValid() {
    // const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
    // return !!parsed && Object.entries(parsed).reduce((acc, [name, data]) => {
    //     return !!(acc && RESOURCES[name] && RESOURCES[name].deserializable(data));
    // }, true);
}

export { saveGame, loadGame, saveValid, saveGameObserver, saveGameEvents };
