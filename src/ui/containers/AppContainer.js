import React, {useEffect, useState} from "react";
import './AppContainer.css';
import GameContainer from "./GameContainer";
import MainMenu from "../components/MainMenu";
import {DebugContext} from "../contexts";

function AppContainer() {
    let [inGame, setInGame] = useState(false);

    let [debugContext, setDebugContext] = useState(
        {
            history: [],
            doLog: true,
            toggleLog: () => {
                setDebugContext(prevState => {
                    return {...prevState, doLog: !prevState.doLog}
                })
            },
            log: (obj) => setDebugContext(prevState => {
                if (prevState.doLog) {
                    let date = new Date();
                    let timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
                    let logString = String(obj);
                    prevState.history.push([timestamp, logString])
                }
                return {...prevState, history: [...prevState.history]}
            })
        }
    );

    useEffect(() => console.log(debugContext.doLog));

    return (
        <DebugContext.Provider value={debugContext}>
            <div className="bg-dark vh-100">
                <div className="container text-light">
                    <div className="row pt-3">
                        <h1>Untitled Incremental Game</h1>
                    </div>
                    {inGame ? <GameContainer/> : <MainMenu setInGame={setInGame}/> }
                </div>
            </div>
        </DebugContext.Provider>
    );
}

export default AppContainer;
