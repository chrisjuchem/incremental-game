import React, {useEffect, useState} from 'react';
import {clock} from '../engine/clock'

function ResourceCount() {
  let [count, setCount] = useState();

  useEffect(() => {
    const subscription = clock.subscribe(x => {
      setCount(x)
    });
    return () => {subscription.unsubscribe()}
  }, [])

  return (<div>
    <p>
      {count}
    </p>
  </div>);
}

export default ResourceCount;