import React from "react";

const MapSegment = ({idx, height}) => {

    let colorIndex = ['map-bg-red', 'map-bg-green', 'map-bg-blue'];

    return(
        <div className={`${colorIndex[idx % colorIndex.length]}`}
             style={{
                 height: `${height}px`
             }}>
            <button className='btn btn-primary unskewed' onClick={() => console.log(`pressed btn ${idx}`)}>
                Factory {idx}
            </button>
        </div>
    )
};

export default MapSegment;
