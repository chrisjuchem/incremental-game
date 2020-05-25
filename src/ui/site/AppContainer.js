import React, {useState} from "react";
import './appContainer.css';
import GameContainer from "./GameContainer";
import MainMenu from "./MainMenu";
// import DebugView from "../components/debug/DebugView";
import DebugContextProvider from "../debug/DebugContextProvider";

function AppContainer() {
    let [inGame, setInGame] = useState(false);

    return (
        <DebugContextProvider>
            <div className="container text-light">
                <div className="row pt-3">
                    <h1>Untitled Incremental Game</h1>
                </div>
                {inGame ? <GameContainer/> : <MainMenu setInGame={setInGame}/> }
                <br/>
                {/*<DebugView/>*/}
            </div>
        </DebugContextProvider>
    );
}

export default AppContainer;
