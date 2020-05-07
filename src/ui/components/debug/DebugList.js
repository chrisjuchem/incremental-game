import React, {useEffect, useState} from "react"
import DebugListItem from "./DebugListItem";

import "./DebugList.css"

function DebugList({history}) {

    let [end, setEnd] = useState(null);

    useEffect(() => {
        if (end !== null) {
            end.scrollIntoView({behavior: "smooth"})
        }
    });

    return(
        <div className="list-group max-vh-20 overflow-auto">
            {
                history.map((entry, idx) => {
                    return <DebugListItem timestamp={entry[0]} string={entry[1]} key={idx}/>
                })
            }
            <div ref={(el) => setEnd(el)}/>
        </div>
    )
}

export default DebugList;
