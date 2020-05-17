import React, {useEffect, useMemo, useState} from "react";
import MapIcon from "./MapIcon";
import factories from "../../engine/v1/gamestate/factory";
import gamestateEmitter from "../../engine/v1/gamestate/gamestate";
import {pluck} from "rxjs/operators";

export default function FactoryMapView({factoryName}) {
    const factoryInfo = useMemo(() => factories[factoryName].info, [factoryName])

    const [progress, setProgress] = useState(0)
    const [rate, setRate] = useState(0)

    useEffect(() => {
        const sub = gamestateEmitter.pipe(
            pluck('factories', factoryName)
        ).subscribe(f => {
            const time =  f.recipe.getTime(f.info.conditions)
            // dont show it if it's ticking up too fast
            setProgress(time > 300 && f.production / time)
            setRate(1000/time)
        })

        return sub.unsubscribe;
    },[factoryName])

    return <MapIcon mapX={factoryInfo.mapX} mapY={factoryInfo.mapY}>
        <div className="factoryNameplate iconDecorator">
            {factoryInfo.name}
        </div>
        <div className="factoryIcon"/>
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