import React from "react";
import CashView from "./CashView";
import ResourcesView from "./ResourcesView";

export default function Sidebar() {
    return <div className="sidebar">
        <CashView/>
        <hr/>
        <ResourcesView/>
    </div>
}