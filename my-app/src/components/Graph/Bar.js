import React from 'react';
import './Bar.css';


export default (props) => {
    return (
        <div className="bar mb-1" style={{ height: `${props.item}%`, width: `${100/props.length}%` }} >
            {props.item}
        </div >
    )
}