import React from "react";
import {loadGame, saveValid} from "../engine/savegame";

function MainMenu({setInGame}) {
    return (
        <div className='main-menu'>
            <button className="btn btn-primary"
                    onClick={() => setInGame(true)}>New Game</button>
            <button className={`btn btn-primary${ saveValid() ? "" : " d-none"}`}
                    onClick={() => {loadGame(); setInGame(true);}}>Load Game</button>
        </div>
    );
}

export default MainMenu;
