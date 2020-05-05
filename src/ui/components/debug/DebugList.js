import React from "react"
import DebugListItem from "./DebugListItem";

import "./DebugList.css"

function DebugList({history}) {

    return(
        <div className="list-group max-vh-20 overflow-auto">
            {console.log(history)}
            {
                history.map(entry => {
                    console.log(entry);
                    return <DebugListItem timestamp={entry[0]} string={entry[1]}/>
                })
            }
        </div>
    )
}

export default DebugList;
