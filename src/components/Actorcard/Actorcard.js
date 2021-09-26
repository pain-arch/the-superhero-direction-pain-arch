import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Actorcard.css'

const Actorcard = (props) => {

    const { name, image,address,salary,email,age} = props.actor;

    return (
        <div className="col">
            <div className="card h-100 text-center card-design">
                <img src={image} className="mt-2 card-img-top w-25 h-50 rounded-circle mx-auto" alt="" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text fs-4">Address: {address}</p>
                    <p className="card-text fs-4">Salary: $ {salary}</p>
                    <p className="card-text fs-4">Age: {age}</p>
                    <p className="card-text fs-4">Email: {email}</p>
                    <button
                    onClick={() => props.handleAddToContract(props.actor)}
                    type="button" className="btn btn-dark"
                    ><FontAwesomeIcon icon={faShoppingCart} /> add to contract</button>
                </div>
            </div>
      </div>
    );
};

export default Actorcard;