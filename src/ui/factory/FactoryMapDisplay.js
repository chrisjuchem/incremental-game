import React, {useCallback, useMemo, useState} from "react";
import MapIcon from "../map/MapIcon";
import factories from "../../engine/v1/gamestate/factory";
import FactoryDetailView from "./FactoryDetailView";
import FactoryProgressBar from "./FactoryProgressBar";

export default function FactoryMapDisplay({factoryName}) {
    const factoryInfo = useMemo(() => factories[factoryName].info, [factoryName])

    const [showStats, setShowStats] = useState(false)

    const clickFunc = useCallback((e) => {
        const clickAwayFunc = (e) => {
            setShowStats(false);
            window.removeEventListener("mousedown", clickAwayFunc)
        }
        window.addEventListener("mousedown", clickAwayFunc)

        setShowStats(true);
        e.stopPropagation()
    }, [setShowStats]);

    return <MapIcon mapX={factoryInfo.mapX} mapY={factoryInfo.mapY} iconClass="factoryIcon" clickFunc={clickFunc}>
        <div className="iconDecorators">
            <div className="factoryNameplate iconDecorator iconDecoratorTop">
                {factoryInfo.name}
            </div>
            <FactoryProgressBar factoryName={factoryName} displayName={factoryInfo.displayName}/>
        </div>
        {
            showStats ?
                <FactoryDetailView/> :
                null
        }
    </MapIcon>
}