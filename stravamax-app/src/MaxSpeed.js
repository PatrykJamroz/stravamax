import React from 'react'

function MaxSpeed(props) {
    
    return (
        <h3>Your max speed: {(props.maxSpeed*3.599).toFixed(1)}kmh</h3>
    )
}

export default MaxSpeed