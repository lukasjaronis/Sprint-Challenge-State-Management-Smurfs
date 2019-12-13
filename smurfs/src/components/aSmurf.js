import React from 'react';

const aSmurf = props => {

    return(
        <div>
        <h1>{props.smurf.name}</h1>
        <span>{props.smurf.age}</span>
        <span>{props.smurf.height}</span>
        </div>
    )
}

export default aSmurf;