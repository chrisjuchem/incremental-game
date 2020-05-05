import React, { useEffect, useState } from 'react';
import { RESOURCES } from "../../engine/resources/resource";

function ResourceCount({resource}) {
    let [count, setCount] = useState(0);
    let [rate, setRate] = useState(0);

    useEffect(() => {
        const subscription = RESOURCES[resource].subscribe(x => {
            setCount(Math.floor(x.count));
            setRate(Math.floor(x.rate));
        });
        return () => {
            subscription.unsubscribe()
        }
    }, [resource])

    // useEffect(() =>
    //     console.log("render " + resource)
    // )

    return (
        <div>
            <p>
                {resource}: {count} ({rate}/s)
            </p>
        </div>
    );
}

export default ResourceCount;
