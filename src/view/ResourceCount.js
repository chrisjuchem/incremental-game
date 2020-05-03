import React, {useEffect, useState} from 'react';
import {resource_emitter} from "../engine/resources";

function ResourceCount(props) {
  let [count, setCount] = useState();

  useEffect(() => {
    const subscription = resource_emitter.subscribe(x => {
      setCount(Math.floor(x[props.resource]))
    });
    return () => {subscription.unsubscribe()}
  }, [props.resource])

  useEffect(() =>
    console.log("render " + props.resource)
  )

  return (<div>
    <p>
      {props.resource}: {count}
    </p>
  </div>);
}

export default ResourceCount;
