import { INITIAL_FETCH } from '../actions/formAppActions';
import { SEND_SERVER } from '../actions/appActions';

const INITIAL_STATE = {
    data: {}
}

export interface IAction {
    type: string,
    payload: any
}

export default function AppReducer(state = INITIAL_STATE, action: IAction) {

    switch(action.type) {
        case INITIAL_FETCH:
            return { ...state, data: action.payload};
        break;

        case SEND_SERVER:
            return { ...state, data: action.payload.data } ;
        break;

        default:
            return state;
    }

}
