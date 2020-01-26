import React from 'react';

const Smurf = props => {
    console.log(props.smurf)
    return (
        <div>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <p>ID: {props.smurf.id}</p>
            <p className="remove" onClick={() => {props.removeSmurf(props.smurf.id)}}>x</p>
        </div>
    )
}

export default Smurf;