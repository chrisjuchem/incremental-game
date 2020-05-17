import React, {useEffect, useMemo, useState} from "react";
import MapIcon from "./MapIcon";
import factories from "../../engine/v1/gamestate/factory";
import gamestateEmitter from "../../engine/v1/gamestate/gamestate";
import {pluck, map} from "rxjs/operators";

export default function FactoryView({factoryName}) {
    const factoryInfo = useMemo(() => factories[factoryName].info, [factoryName])

    const [progress, setProgress] = useState(0)
    const [rate, setRate] = useState(0)
    // const [showProgress, setShowProgress] = useState(true);

    useEffect(() => {
        const sub = gamestateEmitter.pipe(
            pluck('factories', factoryName)
        ).subscribe(f => {
            const time =  f.recipe.getTime(f.info.conditions)
            // setShowProgress(time > 0.3)
            // console.log(time, f.production / time)
            setProgress(time > 300 && f.production / time)
            setRate(1000/time)
        })

        return sub.unsubscribe;
    },[factoryName])

    return <MapIcon mapX={factoryInfo.mapX} mapY={factoryInfo.mapY} className={"factoryIcon"}>
        <div className="factoryNameplate iconDecorator">
            {factoryInfo.name}
        </div>
        <div className="factoryMapInfo iconDecorator">
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
                {rate.toFixed(3)} {factoryInfo.displayName}/s
            </div>
        </div>
    </MapIcon>
}