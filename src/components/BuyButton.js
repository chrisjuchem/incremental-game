import React from "react";
import {RECIPES} from "../engine/resources/recipe";

function BuyButton({recipe}) {

    return (
        <div className="row mb-4">
            <div className="col-3">
                <button className="btn btn-primary btn-block"
                        onClick={() => RECIPES[recipe].buy()}>
                    {recipe}
                </button>
            </div>
            <div className="col-auto">
                Costs:
                {
                    Object.entries(RECIPES[recipe].price)
                        .map(([k,v]) =>
                            <div key={`${recipe}_entries_${k}`}>
                                {`${k}: ${v}`}
                            </div>
                        )
                }
            </div>
            <div className="col-auto">
                Produces:
                {
                    Object.entries(RECIPES[recipe].result)
                        .map(([k,v]) =>
                            <div key={`${recipe}_results_${k}`}>
                                {k}:
                                <br/>
                                {
                                    Object.entries(v)
                                        .map(([k,v]) => `${k}: ${v}`)
                                }
                            </div>
                        )
                }
            </div>

        </div>
    );
}

export default BuyButton;
