import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
const Header = props => {
    const [smurfText, setSmurfText] = useState({name: '', age: '', height: '', id: 0});

    const handleChanges = e => {
        e.preventDefault();
        
        setSmurfText({...smurfText, [e.target.name]: e.target.value});
        console.log(smurfText);
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(smurfText);
        props.addSmurf(smurfText)
        setSmurfText({name: '', age: '', height: '', id: 0})
    }

    return (
        <>
            <form>
                <p>Name</p>
                <input
                    className='smurf-input'
                    type="text"
                    name="name"
                    value={smurfText.name}
                    onChange={handleChanges}
                />
                <p>
                    Age
                </p>
                <input
                    className='smurf-input'
                    type="text"
                    name="age"
                    value={smurfText.age}
                    onChange={handleChanges}
                />
                <p>Height</p>
                <input
                    className='smurf-input'
                    type="text"
                    name="height"
                    value={smurfText.height}
                    onChange={handleChanges}
                />
                
                <div className = 'add'>
                    <button onClick={handleSubmit}>Add Smurf</button>
                </div>
            </form>
        </>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurfs: state.smurf
    }
}
export default connect(
    mapStateToProps,
    { addSmurf }
)(Header);
