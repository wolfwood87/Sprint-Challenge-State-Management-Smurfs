import axios from 'axios';

export const SMURF_LOAD_START = 'SMURF_LOAD_START';
export const SMURF_LOAD_SUCCESS = 'SMURF_LOAD_SUCCESS';
export const SMURF_LOAD_FAIL = 'SMURF_LOAD_FAIL';
export const SMURF_ADD_START = 'SMURF_ADD_START';
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';
export const SMURF_ADD_FAIL = 'SMURF_ADD_FAIL';

export const getSmurf = (name) => dispatch => {
        dispatch({type: SMURF_LOAD_START})

        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                dispatch({
                    type: SMURF_LOAD_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err=> {
                dispatch({
                    type: SMURF_LOAD_FAIL,
                    payload: 'Could not retrieve smurfs'
                })
            })
    }


export const addSmurf = (name) => dispatch => {
    dispatch({type: SMURF_ADD_START})
    console.log(name)
    axios
        .post('http://localhost:3333/smurfs', name)
        .then(res => {
            console.log(res);
            dispatch({
                type: SMURF_ADD_SUCCESS,
                payload: name
            })
        })
        .catch(err => {
            dispatch({
                type: SMURF_ADD_FAIL,
                payload: 'Error adding Smurf'
            })
        });
}
