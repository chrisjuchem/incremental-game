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

export const MapContext = React.createContext({
    getIconDisplacement: (x, y) => {}
})

export const GlobalEventContext = React.createContext({
    addHandler: () => {},
    removeHandler: () => {}
})
