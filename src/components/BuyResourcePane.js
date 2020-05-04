import React from "react";
import BuyButton from "./BuyButton";

function BuyResourcePane({recipes}) {
    return(
        <div className='row'>
            <div className='container-fluid p-0'>
                {
                    recipes.map(r => <BuyButton recipe={r} key={r}/>)
                }
            </div>

        </div>
    )
}

export default BuyResourcePane;
