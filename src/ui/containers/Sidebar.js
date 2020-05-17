import React from "react";
import CashView from "../components/v1/CashView";
import ResourcesView from "../components/v1/ResourcesView";

export default function Sidebar() {
    return <div className="sidebar">
        <CashView/>
        <hr/>
        <ResourcesView/>
    </div>
}