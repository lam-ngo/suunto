import {combineReducers} from 'redux';

const sampleHeartrateData = [{bpm: 63}, {bpm: 62}, {bpm: 60}, {bpm: 60}, {bpm: 59}, {bpm: 57}, {bpm: 57}, {bpm: 58}, {bpm: 63}, {bpm: 67}, {bpm: 70}, {bpm: 71}, {bpm: 75}, {bpm: 70}, {bpm: 65}, {bpm: 78}, {bpm: 85}, {bpm: 88}, {bpm: 90}, {bpm: 104}, {bpm: 120}, {bpm: 123}, {bpm: 124}, {bpm: 126}, {bpm: 128}, {bpm: 130}, {bpm: 132}, {bpm: 135}, {bpm: 120}, {bpm: 108}, {bpm: 90}, {bpm: 75}, {bpm: 70}, {bpm: 68}, {bpm: 65}, {bpm: 63}, {bpm: 61}, {bpm: 62}, {bpm: 62}, {bpm: 62}, {bpm: 62}, {bpm: 62}, {bpm: 61}, {bpm: 61}, {bpm: 61}, {bpm: 63}, {bpm: 62}, {bpm: 59}, {bpm: 57}, {bpm: 57}];

export default combineReducers({
    heartRate(state = 0, action) {
        if (action.type === 'HEARTRATE_SET') {
            return action.payload;
        }
        return state;
    },
    heartRateChart(state = sampleHeartrateData, action) {
        if (action.type === 'HEARTRATE_SET') {
            return [...state, {bpm: action.payload}].slice(-50);
        }
        return state;
    }
});
