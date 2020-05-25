import React from "react";
import {ALL_FACTORY_NAMES} from "../../engine/v1/static/factoryInfo";
import FactoryMapDisplay from "../factory/FactoryMapDisplay";


function MapIconLayer() {
    return <div className="mapIconLayer">
        {ALL_FACTORY_NAMES.map(factory => <FactoryMapDisplay factoryName={factory} key={factory}/>)}
    </div>;
}

export default MapIconLayer;
