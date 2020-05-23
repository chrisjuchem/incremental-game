import React, {useContext, useMemo} from "react";
import {MapContext} from "../contexts";

function MapIcon({mapX, mapY, children, iconClass=""}) {
    const mapCtx = useContext(MapContext);
    const disp = useMemo(() =>  mapCtx.getIconDisplacement(mapX, mapY), [mapX, mapY, mapCtx])

    return <div className="mapElement" style={{
                left:`${disp.x}px`,
                top:`${disp.y}px`,
            }}>
        <div className={`mapIcon ${iconClass}`}/>
        {children}
    </div>
}

export default MapIcon;
