import React from "react"

export const DebugContext = React.createContext({
    history: [],
    doLog: false,
    toggleLog: () => {},
    log: (obj) => {}
});
