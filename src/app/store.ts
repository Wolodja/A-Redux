import { INCREMENT } from './actions';
import { tassign } from 'tassign';
import { Map } from 'immutable';
import { state } from '@angular/animations';

export interface IAppState {
    counter: number;
    messaging?: {
        newMessages: number
    }
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    messaging: {
        newMessages: 5
    }
};

export function rootReducer(state: Map<string, any>, action): Map<string, any> {
    switch (action.type) {
        case INCREMENT:
            return state.set('counter', state.get('counter') + 1);
    }
    return state;
}