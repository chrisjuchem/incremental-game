import React, {useContext, useEffect} from "react"
import {DebugContext} from "../../contexts";
import DebugList from "./DebugList";
import {saveGameEvents, saveGameObserver} from "../../../engine/savegame";
import {RECIPES} from "../../../engine/concrete/recipe";

function DebugView() {

    let context = useContext(DebugContext);

    useEffect(() => {
        const subscription = saveGameObserver.subscribe(x => {
            switch(x) {
                case saveGameEvents.SAVE_GAME_EVENT:
                    context.log('Game saved.');
                    break;
                case saveGameEvents.LOAD_GAME_EVENT:
                    context.log('Game loaded.');
                    break;
                default:
                    console.warn('got unhandled saveGameEvent');
                    context.log(x)
            }
        });

        return () => {
            subscription.unsubscribe()
        }
    });

    useEffect(() => {
       const subscriptions = Object.entries(RECIPES).map(([recipeName, recipeValue]) => {
           return recipeValue.emitter.subscribe(x => {
               let result = Object.entries(x.result).map(([resourceName, resourceValue]) => {
                   return Object.entries(resourceValue).map(([k, v]) => {
                       return `${v}${resourceName}${k === 'rate' ? '/s' : ''}`
                   })
               });

               let logStr = `Bought ${recipeName}, received ${result}`;
               context.log(logStr)
           });
       });

       return () => {
           subscriptions.map(s => s.unsubscribe())
       }
    });

    return(
        context.showLog &&
            <div className="card text-dark">
                <div className="card-body">
                    <h6>Debug Me Daddy</h6>
                    <DebugList history={context.history}/>
                    <br/>
                    <div className="row">
                        <div className="col-2">
                            <button onClick={() => context.toggleLog()}
                                    className={"btn btn-block ".concat(context.doLog ? "btn-success" : "btn-danger")}>
                                Log {context.doLog ? "On" : "Off"}</button>
                        </div>
                        <div className="col-2">
                            <button onClick={() => context.clearLog()}
                                    className={"btn btn-block btn-warning"}>
                                Clear Log</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default DebugView
