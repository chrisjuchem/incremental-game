import React, { useEffect, useState } from 'react';
import { RESOURCES } from "../../engine/concrete/resource";
import GeneratorView from "./GeneratorView";

function ResourceView({resource}) {
    let [count, setCount] = useState(0);
    // let [rate, setRate] = useState(0);

    useEffect(() => {
        const subscription = RESOURCES[resource].emitter.subscribe(x => {
            setCount(Math.floor(x.count));
            // setRate(Math.floor(x.rate));
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
            <div>
                {resource}: {count} <GeneratorView generator={RESOURCES[resource].generator} showBar={false}/>
            </div>
        </div>
    );
}

export default ResourceView;
