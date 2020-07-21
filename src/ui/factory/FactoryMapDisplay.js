import React, {useCallback, useEffect, useMemo, useState} from "react";
import MapIcon from "../map/MapIcon";
import factories from "../../engine/v1/gamestate/factory";
import FactoryDetailView from "./FactoryDetailView";
import FactoryProgressBar from "./FactoryProgressBar";

export default function FactoryMapDisplay({factoryName}) {
    const factoryInfo = useMemo(() => factories[factoryName].info, [factoryName])

    const [showStats, setShowStats] = useState(false)

    const clickFunc = useCallback((e) => {
        setShowStats(true);
    }, [setShowStats]);

    // This needs to be separate from clickFunc else the same event will show and then hide the overlay is it propagates
    useEffect(() => {
        if (showStats) {
            const clickAwayFunc = (e) => {
                setShowStats(false);
                window.removeEventListener("mousedown", clickAwayFunc)
                window.removeEventListener("click", clickAwayFunc)
            }
            window.addEventListener("mousedown", clickAwayFunc)
            window.addEventListener("click", clickAwayFunc)
        }
    }, [showStats])

    return <MapIcon mapX={factoryInfo.mapX} mapY={factoryInfo.mapY} iconClass="factoryIcon" clickFunc={clickFunc}>
        <div className="iconDecorators">
            <div className="factoryNameplate iconDecorator iconDecoratorTop">
                {factoryInfo.name}
            </div>
            <FactoryProgressBar factoryName={factoryName}/>
        </div>
        {
            showStats ?
                <FactoryDetailView factoryName={factoryName}/> :
                null
        }
    </MapIcon>
}