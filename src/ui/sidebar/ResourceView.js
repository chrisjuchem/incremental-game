import React, {useEffect, useMemo, useState} from "react";
import gamestateEmitter from "../../engine/v1/gamestate/gamestate";
import {pluck} from "rxjs/operators";
import resourceInfo from "../../engine/v1/static/resourceInfo";

export default function ResourceView({resourceName}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const sub = gamestateEmitter.pipe(
            pluck('resources', resourceName),
        ).subscribe(setCount);

        return sub.unsubscribe;
    }, [resourceName])

    const name = useMemo(() => resourceInfo[resourceName].displayName, [resourceName]);

    return <div>
        {name}: {count}
    </div>
}
