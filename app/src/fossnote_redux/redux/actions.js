import { TOGGLE_SIDEPANEL,TOGGLE_LEFT_CONTENT } from './actionTypes';

export function toggleSidePanel() {
    return {
        type: TOGGLE_SIDEPANEL
    };
}

export function toggleLeftContent() {
    return {
        type: TOGGLE_LEFT_CONTENT
    };
}
