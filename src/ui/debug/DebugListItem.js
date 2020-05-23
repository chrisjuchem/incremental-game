import React from "react"

function DebugListItem({timestamp, string}) {
    return(
        <div className="list-group-item list-group-item-action p-0 pl-1 text-monospace">
            <span className="text-muted mr-2 font-italic">{timestamp.padEnd(12)}</span>
            <span className="text-black">{string}</span>
        </div>
    )
}

export default DebugListItem
