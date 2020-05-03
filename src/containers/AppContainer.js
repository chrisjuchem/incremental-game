import React from "react";
import ResourceCount from "../view/ResourceCount";
import {updateResources} from "../engine/resources";
import './AppContainer.css';

class AppContainer extends React.Component {
    render = () =>
        <div className="bg-dark vh-100">

            <div className="container text-light">
                <div className="row pt-3">
                    <h1>Untitled Incremental Game</h1>
                </div>
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

        </div>
}

export default AppContainer;
