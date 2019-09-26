import React from 'react';

export default (props) => {

    return (
        <div className="bar" style={{ width: `${props.item}%` }} >
            {props.item}
        </div >
    )
}