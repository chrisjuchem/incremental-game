import ResourceCount from "../components/ResourceCount";
import AutoSaveComponent from "../components/AutoSaveComponent";
import React from "react";
import BuyResourcePane from "../components/BuyResourcePane";
import {RECIPES} from "../engine/resources/recipe";


class GameContainer extends React.Component {
    render = () => {
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
            </div>
        );
    }
}

export default GameContainer;
