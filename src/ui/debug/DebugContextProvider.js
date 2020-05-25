import React from "react";
import {DebugContext} from "../contexts";
import {useEffect, useState} from "react";
import {getFormattedTime} from "../../utils";

function DebugContextProvider({children}) {

    let [debugContext, setDebugContext] = useState(
        {
            history: [],
            doLog: true,
            showLog: false,
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

                    if (prevState.history.length > 100) {
                        prevState.history.shift()
                    }
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
    
    return <DebugContext.Provider value={debugContext}>
        {children}
    </DebugContext.Provider>
}

export default DebugContextProvider;
