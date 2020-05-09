import React, {useEffect, useState} from "react";
import './map.css';
import FactoryMap from "./factoryMap";

function FactoryMapContainer() {
    const innerMapW = 1200;
    const innerMapH = 800;
    const outerBoundsW = 900;
    const outerBoundsH = 600
    const minXTop = 132;
    const maxXTop = innerMapW - outerBoundsW-129;
    const skewX = 78;

    const maxY = innerMapH - outerBoundsH + 76;
    const minY = 102;

    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({x:minXTop, y:minY});

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
                    const y = Math.min(Math.max(old.y - mvY, minY), maxY)
                    const yPercent = (y - minY) / (maxY - minY);
                    // const skewScale = 2*yPercent-1
                    const minX = minXTop - yPercent * skewX
                    const maxX = maxXTop + yPercent * skewX
                    const x = Math.min(Math.max(old.x - mvX, minX), maxX)
                    // console.log(old.x, mvX, x, "//", old.y, mvY, y)
                    // console.log(yPercent)
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
    }, [dragging, maxY, minY, maxXTop])

    return <div className='mapContainer'
                style={{
                    width: `${outerBoundsW}px`,
                    height: `${outerBoundsH}px`,
                }}>
        <div className="innerMapContainer"
             style={{
                left: `${-offset.x}px`,
                top:`${-offset.y}px`,

                width: `${innerMapW}px`,
                height: `${innerMapH}px`,
             }}
             onMouseDown={clickHandler}>
            <FactoryMap cols={4} rows={4} totalRowHeight={innerMapH}/>
        </div>
    </div>
}

export default FactoryMapContainer;
