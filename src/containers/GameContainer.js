import ResourceCount from "../components/ResourceCount";
import {updateResources} from "../engine/resources/resources";
import AutoSaveComponent from "../components/AutoSaveComponent";
import React from "react";


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
                    <button className="btn btn-primary"
                            onClick={() => updateResources({b: 1})}>Add a 'B'</button>

                    <button className="btn btn-primary"
                            onClick={() => updateResources({a: -5, b:-5, c:1})}>5A, 5B -> C</button>

                    <button className="btn btn-primary"
                            onClick={() => updateResources({c:-2}, {a:1})}>2C -> A++</button>

                    <button className="btn btn-primary"
                            onClick={() => updateResources({c:-10}, {b:1})}>10C -> B++</button>
                </div>
            </div>
        );
    }
}

export default GameContainer;