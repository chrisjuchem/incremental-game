import React, {useEffect, useState} from "react";
import './map.css';
import FactoryMap from "./factoryMap";

function FactoryMapContainer() {
    const innerMapW = 3600;
    const innerMapH = 2400;
    const outerBoundsW = 900;
    const outerBoundsH = 600
    const minX = 534;
    const maxX = innerMapW - outerBoundsW-531;
    const maxY = innerMapH - outerBoundsH - 93;
    const minY = 410;

    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({x:minX, y:minY});

    const clickHandler = (event) => {
        if (event.button === 0){
            setDragging(true);
        }
    };

    useEffect(() => {
        const releaseHandler = (event) => {
            if (event.button === 0) {
                setDragging(false);
            }
        }

        window.addEventListener('mouseup', releaseHandler)
        return () => window.removeEventListener('mouseup', releaseHandler)
    }, [])

    useEffect(() => {
        const dragHandler = (event) => {
            const mvX = event.movementX;
            const mvY = event.movementY;
            if (dragging) {
                setOffset(old => {
                    const x = Math.min(Math.max(old.x - mvX, minX), maxX)
                    const y = Math.min(Math.max(old.y - mvY, minY), maxY)
                    return {x: x, y: y}
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

        window.addEventListener('mousemove', dragHandler)
        return () => window.removeEventListener('mousemove', dragHandler)
    }, [dragging, maxX, minX, maxY, minY])

    return <div className='mapContainer'
                style={{
                    width: `${outerBoundsW}px`,
                    height: `${outerBoundsH}px`,
                }}>
        <div className="innerMapContainer"
             style={{
                 transform: ` rotateX(15deg) translateX(${-offset.x}px) translateY(${-offset.y}px)`,

                 width: `${innerMapW}px`,
                 height: `${innerMapH}px`,
             }}
             onMouseDown={clickHandler}>
            <FactoryMap cols={4} rows={4} totalRowHeight={innerMapH}/>
        </div>
    </div>
}

export default FactoryMapContainer;
