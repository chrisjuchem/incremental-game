import React from "react";
import {RESOURCES} from "../engine/resources/resource";

function BuyButton({resource, operation}) {

    return (
        <div className="row mb-4">
            <div className="col-3">
                <button className="btn btn-primary btn-block"
                        onClick={() => RESOURCES[resource].buy(operation)}>
                    {operation}
                </button>
            </div>
            <div className="col-auto">
                Costs:
                {
                    Object.entries(RESOURCES[resource].config.prices[operation].price)
                        .map(([k,v]) =>
                            <div>
                                {`${k}: ${v}`}
                            </div>
                        )
                }
            </div>
            <div className="col-auto">
                Produces {resource}:
                {
                    Object.entries(RESOURCES[resource].config.prices[operation])
                        .map(([k,v]) => {
                            if (k === 'price') {
                                return <></>
                            } else {
                                return(
                                    <div>
                                        {`${k}: ${v}`}
                                    </div>
                                )
                            }
                        })
                }
            </div>

        </div>
    );
}

export default BuyButton;
