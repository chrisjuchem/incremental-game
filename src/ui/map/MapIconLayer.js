import React from "react";
import {ALL_FACTORY_NAMES} from "../../engine/v1/static/factoryInfo";
import FactoryMapView from "./FactoryMapView";


function MapIconLayer() {
    return <div className="mapIconLayer">
        {ALL_FACTORY_NAMES.map(factory => <FactoryMapView factoryName={factory} key={factory}/>)}
    </div>;
}

export default MapIconLayer;
