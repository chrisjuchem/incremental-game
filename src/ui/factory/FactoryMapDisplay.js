import React, {useCallback, useContext, useMemo, useState} from "react";
import MapIcon from "../map/MapIcon";
import factories from "../../engine/v1/gamestate/factory";
import FactoryDetailView from "./FactoryDetailView";
import {GlobalEventContext} from "../contexts";
import FactoryProgressBar from "./FactoryProgressBar";

export default function FactoryMapDisplay({factoryName}) {
    const factoryInfo = useMemo(() => factories[factoryName].info, [factoryName])

    const [showStats, setShowStats] = useState(false)

    const globalHandlers = useContext(GlobalEventContext);
    const clickFunc = useCallback((e) => {
        const clickAwayFunc = (e) => {
            setShowStats(false);
            globalHandlers.removeHandler("onClick", clickAwayFunc)
        }
        globalHandlers.addHandler("onClick", clickAwayFunc)

        setShowStats(true);
    }, [setShowStats, globalHandlers]);

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