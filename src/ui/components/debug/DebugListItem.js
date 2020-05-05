import React from "react"

function DebugListItem({timestamp, string}) {
    return(
        <div className="list-group-item list-group-item-action p-0 pl-1">
            <span className="text-muted mr-2">{timestamp}</span>
            <span className="text-black">{string}</span>
        </div>
    )
}

export default DebugListItem
