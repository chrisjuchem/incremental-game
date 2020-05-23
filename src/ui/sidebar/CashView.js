import React, {useEffect, useState} from "react";
import {pluck} from "rxjs/operators";
import gamestateEmitter from "../../engine/v1/gamestate/gamestate";

export default function CashView() {
    const [cash, setCash] = useState(0);

    useEffect(() => {
        const sub = gamestateEmitter.pipe(
            pluck('cash')
        ).subscribe(setCash);

        return sub.unsubscribe;
    }, [])

    return <div className="cash-display">
        Cash: ${cash}
    </div>;
}