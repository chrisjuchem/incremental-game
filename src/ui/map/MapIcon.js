import React, {useContext, useMemo} from "react";
import {MapContext} from "../contexts";

function MapIcon({mapX, mapY, children, className=""}) {
    const mapCtx = useContext(MapContext);
    const disp = useMemo(() =>  mapCtx.getIconDisplacement(mapX, mapY), [mapX, mapY, mapCtx])

    return <div className="mapIcon" style={{
                left:`${disp.x}px`,
                top:`${disp.y}px`,
            }}>
        {children}
    </div>
}

export default MapIcon;
