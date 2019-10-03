import React from 'react';
import './Bar.css';


export default (props) => {

    return (
        <div className="bar mb-1" style={{ width: `${props.item}%` }} >
            {props.item}
        </div >
    )
}