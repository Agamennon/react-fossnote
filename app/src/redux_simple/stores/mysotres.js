
import { TOGGLE_PANEL } from '../constants/ActionTypes';
export  function side(state = 'closed', action = {}) {
    switch (action.type) {
        case TOGGLE_PANEL:
            var currentState;
            if (state === 'closed'){
                currentState = 'opened';
            }
            if (state === 'opened'){
                currentState = 'closed';
            }
            // console.log(state);
            return currentState;// nao funciona
        default:
            return state;
    }
}

