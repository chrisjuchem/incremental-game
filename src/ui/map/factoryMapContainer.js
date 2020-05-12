import React, {useCallback, useEffect, useState} from "react";
import './map.css';
import FactoryMap from "./factoryMap";
import MapIcon from "./MapIcon";

function FactoryMapContainer() {
    const stopAtBounds = true;

    const innerMapW = 3600;
    const innerMapH = 2400;
    const outerBoundsW = 900;
    const outerBoundsH = 600;

    const perspectiveOffset = {x:534,y:410};
    const dragRange = {x: innerMapW - outerBoundsW - 1065, y: innerMapH - outerBoundsH - 503}

    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState(
        {x:0, y:0}
        // {x:-perspectiveOffset.x, y:dragRange.y}
        );

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
                    //Todo scale by where in the window was grapped/you are so that the point you grab stays exactly under the mouse
                    let x = old.x - mvX;
                    let y = old.y - mvY;
                    if (stopAtBounds) {
                        x = Math.min(Math.max(x, 0), dragRange.x);
                        y = Math.min(Math.max(y, 0), dragRange.y);
                    }
                    return {x: x, y: y};
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
    }, [dragging, dragRange, stopAtBounds])

    const getDisplacement = useCallback((mapX, mapY, debug) => {
        //====================== Calc Y ======================
        const baseScreenY = (mapY - offset.y);
        const ys = [0, 34, 75, 115, 158, 206, 257, 313, 375, 441, 514, 596, 700, 811] // I literally just hand measured all of these. Help.
        let roundedTile = Math.min(Math.floor(baseScreenY/100), 12);

        // Hack: handle top of screen
        ys[-1] = -30
        ys[-2] = -55
        ys[-3] = -80
        roundedTile = Math.max(roundedTile, -3);

        // Hack: linear interpolation for each tile row
        //     top of nearest tile +         percent through tile * dist to next tile
        let newY = ys[roundedTile] + ((((baseScreenY/100 % 1) + 2) % 1) * (ys[roundedTile+1] - ys[roundedTile]))
        //   %1 + 2 handles negatives somewhat gracefully    ^

        // if(debug) console.log(baseScreenY, roundedTile, newY)

        //====================== Calc X ======================
        const xModifier = ((dragRange.x + outerBoundsW) / innerMapW) * 0.64777
        let newX = (mapX - offset.x) * xModifier
        //todo flair out x by (some distance) scaled by screen height (newY)
        newX += (newX - outerBoundsW/2) * .6 * (newY/outerBoundsH)

        return {x: newX , y: newY}
    }, [dragRange, offset, perspectiveOffset])

    return <div className='mapContainer'
                style={{
                    width: `${outerBoundsW}px`,
                    height: `${outerBoundsH}px`,
                }}>
        <div className="innerMapContainer"
             style={{
                 width: `${innerMapW}px`,
                 height: `${innerMapH}px`,
                 transformStyle:"preserve-3d"
             }}
             onMouseDown={clickHandler}>
            <div className="mapLayer mapBGLayer" style={{

                transform: `rotateX(15deg) translateX(${-offset.x - perspectiveOffset.x}px) translateY(${-offset.y - perspectiveOffset.y}px)`,
                // transform: `rotateX(15deg) translateX(${-offset.x }px) translateY(${-offset.y }px)`,
            }}>
                <div className="factoryMap"/>
                {/*<FactoryMap cols={4} rows={4} totalRowHeight={innerMapH}/>*/}
            </div>





            <div className="mapLayer mapIconLayer"
                 style={{
                    // transform: `translateX(${-offset.x}px) translateY(${-offset.y}px)`,
                 }}>
                {
                    new Array(4).fill(0).map((_, i) =>
                        new Array(3).fill(0).map((_, j) => [i*800, j*800])).reduce((prev, next) => prev.concat(next))
                   .map(([x,y, debug]) => <MapIcon displacement={getDisplacement(x, y, x===800 && y===800)} debug={x===0 && y===0}/>)}
            </div>
        </div>
    </div>
}

export default FactoryMapContainer;
