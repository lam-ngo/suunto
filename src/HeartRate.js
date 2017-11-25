import React from 'react'
import {connect} from "react-redux";

export default connect(
    ({heartRate}) => ({heartRate})
)(({heartRate}) => (
    <div>Heart Rate: {heartRate} BPM</div>
))