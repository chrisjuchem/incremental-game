import ResourceCount from "../components/ResourceCount";
import AutoSaveComponent from "../components/AutoSaveComponent";
import React, {useContext} from "react";
import BuyResourcePane from "../components/BuyResourcePane";
import {RECIPES} from "../../engine/resources/recipe";
import ContextProvider from "../components/debug/ContextProvider";
import {DebugContext} from "../contexts";


function GameContainer() {

    let context = useContext(DebugContext);

    return (
        <div className="container game-container">
            <AutoSaveComponent saveInterval={5}/>
            <div className="row">
                <ResourceCount resource='a'/>
            </div>
            <div className="row">
                <ResourceCount resource='b'/>
            </div>
            <div className="row">
                <ResourceCount resource='c'/>
            </div>
            <BuyResourcePane recipes={Object.keys(RECIPES)}/>
            <ContextProvider/>
        </div>
    );
}

export default GameContainer;
