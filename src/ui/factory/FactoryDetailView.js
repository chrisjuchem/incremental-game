import React from "react";
import './factoryDetail.css';

export default function FactoryDetailView() {
    return <div className="factoryDetail" onClick={e => e.stopPropagation()} onMouseDown={e => e.stopPropagation()}>
        STATS
    </div>
}
