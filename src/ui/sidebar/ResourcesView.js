import React from "react";
import {ALL_RESOURCE_NAMES} from "../../engine/v1/static/resourceInfo";
import ResourceView from "./ResourceView";

export default function ResourcesView() {
    return <div className="resources-view">
        {ALL_RESOURCE_NAMES.map(r => <ResourceView resourceName={r} key={`resource-${r}`}/>)}
    </div>;
}
