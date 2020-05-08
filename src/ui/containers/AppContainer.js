import React, {useState} from "react";
import './AppContainer.css';
import GameContainer from "./GameContainer";
import MainMenu from "../components/MainMenu";
import DebugView from "../components/debug/DebugView";
import DebugContextProvider from "../components/debug/DebugProviderContext";

function AppContainer() {
    let [inGame, setInGame] = useState(false);

    let inner = <div className="container text-light">
        <div className="row pt-3">
            <h1>Untitled Incremental Game</h1>
        </div>
        {inGame ? <GameContainer/> : <MainMenu setInGame={setInGame}/> }
        <br/>
        <DebugView/>
    </div>

    return (
        <DebugContextProvider inner={inner}/>
    );
}

export default AppContainer;
