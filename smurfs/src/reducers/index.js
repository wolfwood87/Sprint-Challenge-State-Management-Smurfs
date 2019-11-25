import axios from 'axios';
import { SMURF_LOAD_START,
 SMURF_LOAD_SUCCESS,
SMURF_LOAD_FAIL,
SMURF_ADD_START,
SMURF_ADD_SUCCESS,
SMURF_ADD_FAIL }
from '../actions'


const initialState = {
    isLoading: false,
    error: '',
    smurf: [{name: '', age: 0, height: '', id: 0}]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SMURF_LOAD_START:
            return {
                ...state,
                error: '',
                isLoading: true,
            };
        case SMURF_LOAD_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false
            }
        case SMURF_LOAD_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case SMURF_ADD_START:
            return {
                ...state,
                error: action.payload,
                isLoading: true
            }
        case SMURF_ADD_SUCCESS:
            return {
                ...state,
                smurf: [...state.smurf, action.payload],
                isLoading: false
            }
        case SMURF_ADD_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default: return state;
    }
}

export default reducer;