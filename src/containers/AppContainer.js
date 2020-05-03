import React, { useState }  from "react";
import './AppContainer.css';
import GameContainer from "./GameContainer";
import MainMenu from "../components/MainMenu";

function AppContainer() {
    let [inGame, setInGame] = useState(false);

    return (
        <div className="bg-dark vh-100">
            <div className="container text-light">
                <div className="row pt-3">
                    <h1>Untitled Incremental Game</h1>
                </div>
                {inGame ? <GameContainer/> : <MainMenu setInGame={setInGame}/> }
            </div>
        </div>
    );
}

export default AppContainer;
