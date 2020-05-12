import ResourceView from "../components/poc/ResourceView";
import AutoSaveComponent from "../components/AutoSaveComponent";
import React from "react";
import BuyResourcePane from "../components/poc/BuyResourcePane";
import {RECIPES} from "../../engine/concrete/recipe";
import MapContainer from "../map/MapContainer";

function GameContainer() {

    return (
        <div className="container game-container">
            <AutoSaveComponent saveInterval={5}/>
            <MapContainer/>
            <div className="row">
                <ResourceView resource='a'/>
            </div>
            <div className="row">
                <ResourceView resource='b'/>
            </div>
            <div className="row">
                <ResourceView resource='c'/>
            </div>
            <BuyResourcePane recipes={Object.keys(RECIPES)}/>
        </div>
    );
}

export default GameContainer;
