import React from "react";
import {ALL_FACTORY_NAMES} from "../../engine/v1/static/factoryInfo";
import FactoryView from "./FactoryView";


function MapIconLayer() {
    return <div className="mapIconLayer">
        {ALL_FACTORY_NAMES.map(factory => <FactoryView factoryName={factory} key={factory}/>)}
    </div>;
}

export default MapIconLayer;
