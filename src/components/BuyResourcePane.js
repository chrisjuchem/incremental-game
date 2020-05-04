import React from "react";
import BuyButton from "./BuyButton";

function BuyResourcePane() {
    return(
        <div className='row'>
            <div className='container-fluid p-0'>
                <BuyButton resource={'b'} operation={'click'}/>
                <BuyButton resource={'c'} operation={'convert'}/>
                <BuyButton resource={'a'} operation={'a++'}/>
                <BuyButton resource={'b'} operation={'b++'}/>
            </div>

        </div>
    )
}

export default BuyResourcePane;
