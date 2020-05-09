import React, {useState} from "react";
import './map.css';
import FactoryMap from "./factoryMap";

function FactoryMapContainer() {
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({x:0, y:0});

    const maxX = 200;
    const maxY = 200;

    const clickHandler = (event) => {
        if (event.button === 0){
            setDragging(true);
        }
    };

    const releaseHandler = (event) => {
        if (event.button === 0){
            setDragging(false);
        }
    }

    const dragHandler = (event) => {
        const mvX = event.movementX;
        const mvY = event.movementY;
        if (dragging) {
            setOffset(old => {
                return {
                    x: Math.max(Math.min(old.x + mvX, 0), -maxX),
                    y: Math.max(Math.min(old.y + mvY, 0), -maxY),
                }
            })
            // PREVENT HIGHLIGHTING - THANKS STACKOVERFLOW
            // https://stackoverflow.com/questions/29908261/prevent-text-selection-on-mouse-drag
            if (document.selection) {
                document.selection.empty()
            } else {
                window.getSelection().removeAllRanges()
            }
        }
    }


    return <div className='mapContainer'>
        <div className="innerMapContainer" style={{left: `${offset.x}px`, top:`${offset.y}px`}}
            onMouseDown={clickHandler} onMouseMove={dragHandler} onMouseUp={releaseHandler}>
            <FactoryMap/>
        </div>
    </div>
}

export default FactoryMapContainer;
