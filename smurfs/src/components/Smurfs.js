import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { getSmurf, removeSmurf } from '../actions';

const Smurfs = props => {
    const deleteSmurf = (e) => {
       e.preventDefault();
       props.removeSmurf()
    }
    useEffect(() => {
        props.getSmurf();
    },[])
    return (
        <div>
            <h2>Smurf Population</h2>
            {props.smurfs.map((item, index) => (
                <Smurf key={index} smurf={item} index={index} removeSmurf = {props.removeSmurf}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurfs: state.smurf
    }
}
export default connect (
    mapStateToProps,
    {getSmurf, removeSmurf}
)(Smurfs);