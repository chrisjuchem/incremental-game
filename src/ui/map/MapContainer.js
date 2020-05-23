import React, {useCallback, useEffect, useState} from "react";
import './map.css';
import MapBackgroundLayer from "./MapBackgroundLayer";
import MapIconLayer from "./MapIconLayer";
import {MapContext} from "../contexts";

function MapContainer() {
    const stopAtBounds = true;

    // Values used as raw coordinates
    const mapW = 3600;
    const mapH = 2400;
    // Visual size of the map
    const viewportW = 900;
    const viewportH = 600;

    // Pixels of mouse drag to scroll from one end to the other of the map (after perspective is applied)
    const dragRange = {x: mapW - viewportW - 1065, y: mapH - viewportH - 503}
    // Offset to apply to the map after perspective to line it up at 0,0
    const perspectiveOffset = {x:534,y:410};

    const [dragging, setDragging] = useState(false);
    const [displacement, setDisplacement] = useState({x:0, y:0});

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
            if (dragging) {
                const mvX = event.movementX;
                const mvY = event.movementY;
                setDisplacement(old => {
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

    const getDisplacement = useCallback((mapX, mapY) => {
        //====================== Calc Y ======================
        const baseScreenY = (mapY - displacement.y);
        const ys = [0, 34, 75, 115, 158, 206, 257, 313, 375, 441, 514, 596, 700, 811] // I literally just hand measured all of these. Help.
        let roundedTile = Math.min(Math.floor(baseScreenY/100), 12);

        // Hack: handle top of screen
        ys[-1] = -30
        ys[-2] = -55
        ys[-3] = -80
        roundedTile = Math.max(roundedTile, -3);

        // Hack: linear interpolation for each tile row
        //     top of nearest tile +         percent through tile * dist to next tile
        let newY = ys[roundedTile] + ((((baseScreenY/100 % 1) + 1) % 1) * (ys[roundedTile+1] - ys[roundedTile]))
        //    %1 +1 %1 handles negatives somewhat gracefully    ^

        //====================== Calc X ======================
        const xModifier = ((dragRange.x + viewportW) / mapW) * 0.64777
        let newX = (mapX - displacement.x) * xModifier
        // flair out the bottom proportionally to the screen height
        newX += (newX - viewportW/2) * .6 * (newY/viewportH)

        return {x: newX , y: newY}
    }, [dragRange, displacement])

    return (
        <div
            className='mapContainer'
            style={{
                width: `${viewportW}px`,
                height: `${viewportH}px`,
            }}>
            <div className={`innerMapContainer innerMapContainer-drag-${dragging}`}
                 style={{
                     width: `${mapW}px`,
                     height: `${mapH}px`,
                     transformStyle:"preserve-3d"
                 }}
                 onMouseDown={clickHandler}>

                <div className="mapLayer" style={{
                    transform: `rotateX(15deg) translateX(${-displacement.x - perspectiveOffset.x}px) translateY(${-displacement.y - perspectiveOffset.y}px)`,
                }}>
                    <MapBackgroundLayer/>
                </div>

                <div className="mapLayer">
                    <MapContext.Provider value={{getIconDisplacement: getDisplacement}}>
                        <MapIconLayer/>
                    </MapContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default MapContainer;
