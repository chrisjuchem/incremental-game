import React, {useCallback, useState} from "react";
import {GlobalEventContext} from "../contexts";


export default function GlobalEventProvider({children}) {
    const [handlers, setHandlers] = useState({
        onClick: [],
        onDrag: [],
        onRelease: [],
    });

    function getExecutor(eventType) {
        return (event) => {
            console.log("executing", eventType)
            handlers[eventType].forEach(f => f(event))
        }
    }

    const addHandler = useCallback( (type, f) => {
        setHandlers(old => {
            return {
                ...old,
                [type]: old[type].concat([f])
            }
        })
    }, [setHandlers]);

    const removeHandler = useCallback((type, f) => {
        setHandlers(old => {return {
            ...old,
            [type]: old[type].filter(el => el !== f)
        }})
    }, [setHandlers]);

    return <GlobalEventContext.Provider value={{addHandler, removeHandler}}>
        <div className="globalEventHandler" onClick={getExecutor("onClick")}>
            {children}
        </div>
    </GlobalEventContext.Provider>
}
