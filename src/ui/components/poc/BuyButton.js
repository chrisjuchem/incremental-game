import React from "react";
import {RECIPES} from "../../../engine/v0/concrete/recipe";

function BuyButton({recipe}) {

    return (
        <div className="row mb-4">
            <div className="col-3">
                <button className="btn btn-primary btn-block"
                        onClick={() => {
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
