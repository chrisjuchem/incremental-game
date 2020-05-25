import React, {useState} from "react";
import './appContainer.css';
import GameContainer from "./GameContainer";
import MainMenu from "./MainMenu";
// import DebugView from "../components/debug/DebugView";
import DebugContextProvider from "../debug/DebugContextProvider";
import GlobalEventProvider from "./GlobalEventProvdier";

function AppContainer() {
    let [inGame, setInGame] = useState(false);

    return (
        <GlobalEventProvider>
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
        </GlobalEventProvider>
    );
}

export default AppContainer;
