import React from 'react'

function Alert(props) {
    // capitalize first word
    const capitalize = (word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (

    props.alert && <div className={`alert alert-${props.alert.msg} alert-${props.alert.type} fade show`} role="alert">
          {/* props.alert &&--if this is false then second will not evvaluate alert-${props.alert.msg} alert-${props.alert.type--change the color of alert box accordingly*/}
        {props.alert.msg}:{capitalize (props.alert.type)}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>

  )
}

export default Alert
