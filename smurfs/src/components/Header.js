import React, { useState } from 'react';
import { connect } from 'react-redux';

const Header = props => {
    const [smurfText, setSmurfText] = useState('');

    const handleChanges = e => {
        e.preventDefault();
        setSmurfText(e.target.value);
        console.log(smurfText);
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(smurfText);
    }
    
    return (
        <>
            <form>
                <input
                    className='smurf-input'
                    type="text"
                    name="charText"
                    value={smurfText}
                    onChange={handleChanges}
                />
                <button onClick={handleSubmit}>Add Smurf</button>
        </>
    )
}