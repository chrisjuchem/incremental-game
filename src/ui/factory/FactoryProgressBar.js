import React, {useEffect, useState} from "react";
import gamestateEmitter from "../../engine/v1/gamestate/gamestate";
import {pluck} from "rxjs/operators";

export default function FactoryProgressBar({factoryName, displayName}) {
    const [progress, setProgress] = useState(false)
    const [rate, setRate] = useState(0)


    useEffect(() => {
        const sub = gamestateEmitter.pipe(
            pluck('factories', factoryName)
        ).subscribe(f => {
            const time =  f.recipe.getTime(f.info.conditions) // TODO do we need this every render? if needed every frame, can we cache it in the tick update
            // dont show it if it's ticking up too fast
            setProgress(time > 300 && f.production / time)
            setRate(1000/time)
        })

        return sub.unsubscribe;
    },[factoryName]);


    return <div className="factoryMapInfo iconDecorator iconDecoratorBottom">
        {
            progress ?
                <div className="factoryProgressBar">
                    <div className="progress">
                        <div className="progress-bar"
                             role="progressbar"
                             style={{width: `${100 * progress}%`, transition:"none"}}
                        />
                    </div>
                </div> :
                null
        }
        <div className="factoryRate">
            {rate.toFixed(3)} {displayName}/s
        </div>
    </div>
}
