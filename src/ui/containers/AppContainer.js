import React, {useEffect, useState} from "react";
import './AppContainer.css';
import GameContainer from "./GameContainer";
import MainMenu from "../components/MainMenu";
import {DebugContext} from "../contexts";
import DebugContextProvider from "../components/debug/DebugContextProvider";
import {getFormattedTime} from "../../utils";

function AppContainer() {
    let [inGame, setInGame] = useState(false);

    let [debugContext, setDebugContext] = useState(
        {
            history: [],
            doLog: true,
            showLog: true,
            toggleLog: () => {
                setDebugContext(prevState => {
                    return {...prevState, doLog: !prevState.doLog}
                })
            },
            toggleShowLog: () => {
                setDebugContext(prevState => {
                    return {...prevState, showLog: !prevState.showLog}
                })
            },
            log: (obj) => setDebugContext(prevState => {
                if (prevState.doLog) {
                    let timestamp = getFormattedTime(new Date());
                    let logString = String(obj);
                    prevState.history.push([timestamp, logString]);
                }
                return {...prevState, history: [...prevState.history]}
            }),
            clearLog: () => setDebugContext( prevState => {
                return {...prevState, history: []}
            })
        }
    );

    useEffect(() => {
        let debugKeypressHandler = (event) => {
            if (event.key === 'd') {
                debugContext.toggleShowLog()
            }
        };

        window.addEventListener('keydown', debugKeypressHandler);
        return () => window.removeEventListener('keydown', debugKeypressHandler)
    }, [debugContext]);

    return (
        <DebugContext.Provider value={debugContext}>
            <div className="container text-light">
                <div className="row pt-3">
                    <h1>Untitled Incremental Game</h1>
                </div>
                {inGame ? <GameContainer/> : <MainMenu setInGame={setInGame}/> }
                <br/>
                <DebugContextProvider/>
            </div>
        </DebugContext.Provider>
    );
}

export default AppContainer;
