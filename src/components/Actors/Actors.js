import React, { useEffect, useState } from 'react';
import './Actors.css';
import Actorcard from '../Actorcard/Actorcard';
import Contract from '../Contract/Contract'


const Actors = () => {


    const [actors, setActors] = useState([]);
    const [contract, setContract] = useState([]);

    useEffect(() => {
        fetch('./fakedata.JSON')
        .then(res => res.json())
        .then(data => setActors(data))
    }, []);

    const handleAddToContract = (actors) => {
        const newContract = [...contract, actors];
        setContract(newContract);
    }


    return (
        <div className="mt-5 main-container"> 
            <div className="actors-container">
            <h3 className="mb-5 fs-1" >Actors:{actors.length}</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                    actors.map(actor => <Actorcard
                        key={actor.key}
                        actor={actor}
                        handleAddToContract={handleAddToContract}
                    >
                    </Actorcard>)
                }
            </div>     
            </div>
            <div className="contract-container">
                <Contract contract={contract}></Contract>
            </div>
        </div>
    );
};

export default Actors;