import {useContext, useEffect} from "react";
import { interval } from "rxjs";
import { saveGame } from "../../engine/savegame";
import {DebugContext} from "../contexts";

function AutoSaveComponent({saveInterval}) {

    let context = useContext(DebugContext);

    useEffect(() => {
        const subsciption = interval(1000*saveInterval).subscribe(
            () => {
                context.log('Game saved.');
                saveGame()
            }
        );

        return () => subsciption.unsubscribe();
    }, [saveInterval])

    return null;
}

export default AutoSaveComponent;
