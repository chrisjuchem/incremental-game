import React from "react";

function MapIcon({displacement}) {

    return <div className="mapIcon" style={{
                left:`${displacement.x}px`,
                top:`${displacement.y}px`,
            }}>
        TEST
    </div>
}

export default MapIcon;
