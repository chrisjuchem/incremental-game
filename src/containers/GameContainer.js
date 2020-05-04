import ResourceCount from "../components/ResourceCount";
import AutoSaveComponent from "../components/AutoSaveComponent";
import React from "react";
import BuyButton from "../components/BuyButton";
import BuyResourcePane from "../components/BuyResourcePane";


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
                <BuyResourcePane/>
            </div>
        );
    }
}

export default GameContainer;
