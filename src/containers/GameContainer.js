import ResourceCount from "../components/ResourceCount";
import AutoSaveComponent from "../components/AutoSaveComponent";
import React from "react";
import BuyButton from "../components/BuyButton";


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
                <div className="row">
                    <BuyButton resource={'b'} operation={'click'}/>
                    <BuyButton resource={'c'} operation={'convert'}/>
                    <BuyButton resource={'a'} operation={'a++'}/>
                    <BuyButton resource={'b'} operation={'b++'}/>
                </div>
            </div>
        );
    }
}

export default GameContainer;