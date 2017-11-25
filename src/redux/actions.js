export function setHeartRate(value) {
    return {type: "HEARTRATE_SET", payload: value};
}

global.actions = {
    setHeartRate
};