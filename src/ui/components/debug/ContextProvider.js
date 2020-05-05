import React, {useContext} from "react"
import {DebugContext} from "../../contexts";
import DebugList from "./DebugList";

function ContextProvider() {

    let context = useContext(DebugContext);

    return(
        <div className="card text-dark">
            <div className="card-body">
                <h6>Debug Me Daddy</h6>
                <DebugList history={context.history}/>
                <br/>
                <button onClick={() => context.toggleLog()} className="btn btn-primary">Toggle Log</button>
                <span className="pl-2">Log State: {String(context.doLog)}</span>
            </div>
        </div>
    )
}

export default ContextProvider
