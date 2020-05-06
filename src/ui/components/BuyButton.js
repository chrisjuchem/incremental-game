import React, {useContext} from "react";
import {RECIPES} from "../../engine/concrete/recipe";
import {DebugContext} from "../contexts";

function BuyButton({recipe}) {

    let context = useContext(DebugContext);

    return (
        <div className="row mb-4">
            <div className="col-3">
                <button className="btn btn-primary btn-block"
                        onClick={() => {
                            context.log(`bought ${recipe}`)
                            RECIPES[recipe].buy()
                        }}>
                    {recipe}
                </button>
            </div>
            <div className="col-auto">
                Costs:
                {
                    Object.entries(RECIPES[recipe].price)
                        .map(([k,v]) =>
                            <div key={`${recipe}_entries_${k}`}>
                                {`${v} ${k}`}
                            </div>
                        )
                }
            </div>
            <div className="col-auto">
                Produces:
                {
                    Object.entries(RECIPES[recipe].result)
                        .map(([resource,data]) =>
                            <div key={`${recipe}_results_${resource}`}>
                                {
                                    Object.entries(data)
                                        .map(([k,v]) => `${v} ${resource}${k === 'rate' ? '/s' : ''}`)
                                }
                            </div>
                        )
                }
            </div>

        </div>
    );
}

export default BuyButton;
