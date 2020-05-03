import React, {useEffect, useState} from 'react';
import {resource_emitter} from "../engine/resources";

function ResourceCount(props) {
    let [rawCount, setRawCount] = useState(0);
    let [generationCount, setGenerationCount] = useState(0);

    useEffect(() => {
        const subscription = resource_emitter.subscribe(x => {
            setRawCount(Math.floor(x.raw[props.resource]))
            setGenerationCount(Math.floor(x.generation[props.resource]))
        });
        return () => {
            subscription.unsubscribe()
        }
    }, [props.resource])

    // useEffect(() =>
    //     console.log("render " + props.resource)
    // )

    return (
        <div>
            <p>
                {props.resource}: {rawCount} ({generationCount}/s)
            </p>
        </div>
    );
}

export default ResourceCount;
