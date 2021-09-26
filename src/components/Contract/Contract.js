import React from 'react';
import './Contract.css';

const Contract = (props) => {

    const { contract } = props;

    let totalQuantity = 0;
    let total = 0;

    for (const actor of contract) {
        if (!actor.quantity) {
            actor.quantity = 1;
        }
        total = total + actor.salary * actor.quantity;
        totalQuantity = totalQuantity + actor.quantity;
    }


    return (
        <div className="contract-design">
            <h2 className="mt-5 fs-2" >Contract list</h2>
            <h5 className="fs-4">Actor Selected:{totalQuantity}</h5>
            <p className="fs-3">Total Salary:$ {total.toFixed(2)}</p>  
            {
               contract.map(actor => <li>{actor.name}</li>)
            }         
        </div>
    );
};

export default Contract;