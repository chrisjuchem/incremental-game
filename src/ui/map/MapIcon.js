import React, {useEffect} from "react";

function MapIcon({displacement, debug}) {

    useEffect(() => {
        if (debug) {
            // console.log(displacement)
        }
    }, [debug, displacement])

    return <div style={{
                position: "absolute",
                left:`${displacement.x + 1}px`,
                top:`${displacement.y + 2}px`,
                width:"50px",
                height:"50px",
                backgroundColor: "red",
            }}>
        TEST
    </div>
}

export default MapIcon;
