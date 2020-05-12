import MapIcon from "./MapIcon";
import React from "react";


function MapIconLayer({getDisplacement}) {
    return <div className="mapIconLayer">
        {new Array(4).fill(0).map((_, i) =>
            new Array(3).fill(0).map((_, j) => [i * 800 + 400, j * 800 + 400])).reduce((prev, next) => prev.concat(next))
            .map(([x,y, debug]) => <MapIcon key={`${x},${y}`} displacement={getDisplacement(x, y)}/>)}
    </div>;
}

export default MapIconLayer;
