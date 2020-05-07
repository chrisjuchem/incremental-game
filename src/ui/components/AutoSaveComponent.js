import {useContext, useEffect} from "react";
import { interval } from "rxjs";
import { saveGame } from "../../engine/savegame";
import {DebugContext} from "../contexts";

function AutoSaveComponent({saveInterval}) {

    let context = useContext(DebugContext);

    useEffect(() => {
        const subscription = interval(1000*saveInterval).subscribe(
            () => {
                saveGame()
            }
        );

        return () => subscription.unsubscribe();
    }, [context, saveInterval])

    return null;
}

export default AutoSaveComponent;
