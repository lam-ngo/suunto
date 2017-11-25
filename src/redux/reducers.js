import {combineReducers} from "redux";

export default combineReducers({
    heartRate(state = 0, action) {
        if (action.type === 'HEARTRATE_SET') {
            return action.payload;
        }
        return state;
    }
});
