import React from "react";
import {RESOURCES} from "../engine/resources/resource";

function BuyButton({resource, operation}) {

    return (
        <div>
            {JSON.stringify(RESOURCES[resource].config.prices[operation].price)} ->
            <button className="btn btn-primary"
                onClick={() => RESOURCES[resource].buy(operation)}>
                {operation}
            </button>
        </div>
    );
}

export default BuyButton;
