import React from "react";
import ResourceCount from "../view/ResourceCount";
import {addResource} from "../engine/resources";

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
                            onClick={() => addResource('b', 1)}>Add a 'B'</button>
                </div>
            </div>

        </div>
}

export default AppContainer;
