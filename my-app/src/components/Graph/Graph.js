import React, { Component } from 'react';
import array from '../helper/data'

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderToGraph() {
        return array.map((item) => {
            return (
                <div className="bar">
                    <p>{item}</p>
                </div >
            )
        })
    }
    render() {
        console.log(array);
        return (
            <div className="graph">
                {this.renderToGraph()}
            </div>
        )
    }
}

export default Graph;
