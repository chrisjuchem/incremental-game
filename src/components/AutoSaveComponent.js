import React, {useEffect} from "react";
import { interval } from "rxjs";
import { saveGame } from "../engine/savegame";

function AutoSaveComponent({saveInterval}) {
    useEffect(() => {
        const subsciption = interval(1000*saveInterval).subscribe(
            () => saveGame()
        );

        return () => subsciption.unsubscribe();
    }, [])

    return null;
}

export default AutoSaveComponent;
