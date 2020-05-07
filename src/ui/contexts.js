import React from "react"

export const DebugContext = React.createContext({
    history: [],
    doLog: false,
    showLog: false,
    toggleLog: () => {},
    toggleShowLog: () => {},
    log: (obj) => {},
    clearLog: () => {}
});
