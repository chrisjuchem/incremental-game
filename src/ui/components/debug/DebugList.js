import React from "react"
import DebugListItem from "./DebugListItem";

import "./DebugList.css"

function DebugList({history}) {

    return(
        <div className="list-group max-vh-20 overflow-auto">
            {
                history.map((entry, idx) => {
                    return <DebugListItem timestamp={entry[0]} string={entry[1]} key={idx}/>
                })
            }
        </div>
    )
}

export default DebugList;
