import React from "react";
import BuyButton from "./BuyButton";

function BuyResourcePane() {
    return(
        <div className='row'>
            <div className='container-fluid p-0'>
                <BuyButton recipe={'click'}/>
                <BuyButton recipe={'convert'}/>
                <BuyButton recipe={'a++'}/>
                <BuyButton recipe={'b++'}/>
            </div>

        </div>
    )
}

export default BuyResourcePane;
