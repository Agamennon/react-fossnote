
import { TOGGLE_SIDEPANEL, TOGGLE_LEFT_CONTENT } from './actionTypes';


export  function sidePanelPosition(state = 'opened', action = {}) {
    switch (action.type) {
        case TOGGLE_SIDEPANEL:
            var currentState;
            if (state === 'closed'){
                currentState = 'opened';
            }
            if (state === 'opened'){
                currentState = 'closed';
            }
            return currentState;
        default:
            return state;
    }
}

export function leftContent(state = {colapse:false}, action = {}) {

    switch (action.type) {
        case TOGGLE_LEFT_CONTENT:
            var colapseState = state.colapse;
            colapseState = !colapseState;
            console.log(colapseState);
            return {colapse:colapseState};
        default:
            return state;
    }
}


