import AutoSaveComponent from "../components/AutoSaveComponent";
import React from "react";
import MapContainer from "../map/MapContainer";
import Sidebar from "./Sidebar";

function GameContainer() {

    return (
        <div className="container game-container">
            {/*<AutoSaveComponent saveInterval={5}/>*/}
            <Sidebar/>
            <MapContainer/>

        </div>
    );
}

export default GameContainer;
