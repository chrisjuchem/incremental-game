import React, {useEffect, useState} from "react";
import MapSegment from "./MapSegment";

function FactoryMap({cols, rows, totalRowHeight}) {

    let [map, setMap] = useState([]);

    useEffect(() => {
        let effectiveHeight = Math.floor(totalRowHeight / rows);

        setMap((new Array(rows).fill(0)).map((_, i) =>
            <div className="row p-0 m-0" key={i}
                 style={{
                     height: `${effectiveHeight}px`
                 }}>
                {
                    (new Array(cols).fill(0)).map((_, j) => <div className={"col m-0 p-0"} key={j}>
                        <MapSegment idx={cols * i + j} height={effectiveHeight}/>
                    </div>)
                }
            </div>));
    }, [cols, rows, totalRowHeight]);

    return(
        <div className="factoryMap">
            {map}
        </div>
    )
}

export default FactoryMap;
