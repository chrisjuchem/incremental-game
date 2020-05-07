import ResourceView from "../components/ResourceView";
import AutoSaveComponent from "../components/AutoSaveComponent";
import React from "react";
import BuyResourcePane from "../components/BuyResourcePane";
import {RECIPES} from "../../engine/concrete/recipe";

function GameContainer() {

    return (
        <div className="container game-container">
            <AutoSaveComponent saveInterval={5}/>
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
