import React, {useEffect, useState} from "react";

function GeneratorView({generator, showBar=false}) {

    const [progress, setProgress] = useState(0);
    const [rate, setRate] = useState(0);

    useEffect(() => {
        const subscription = generator.emitter.subscribe(x => {
            setProgress(x.progress);
            setRate(x.rate);
        });
        return () => {
            subscription.unsubscribe();
        }
    }, [generator])

    return <div>
        {showBar
            ? <div className="progress">
                <div className="progress-bar"
                     role="progressbar"
                     style={{width: `${100 * progress}%`, transition:"none"}}
                     // aria-valuenow={progress}
                     // aria-valuemin="0"
                     // aria-valuemax="1"
                />
            </div>
            : null}
        {rate}/s
    </div>
}

export default GeneratorView;
