import React, { Component } from 'react';
import Bar from './Bar';

import dataArray from '../helper/data';
import bubbleSort from '../algorithms/bubble';


class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray,
            bigArray: []
        }
    }

    renderToGraph() {
        return this.state.dataArray.map((item) => {
            return (
                <Bar item={item} />
            )
        })
    }

    swapNumbers = () => {
        this.setState({ bigArray: bubbleSort(this.state.dataArray) });
        this.renderAnimation();
    }

    renderAnimation = () => {
        let i = 0;
        const interval = setInterval(() => {
            this.setState({ dataArray: this.state.bigArray[i] });
            i++
            if (i >= this.state.bigArray.length) {
                clearInterval(interval);
                return
            }
        }, 1000)

    }

    render() {
        return (
            <div className="graph">
                {this.renderToGraph()}
                <button className="btn btn-primary" onClick={this.swapNumbers}>Click</button>
            </div>

        )
    }
}

export default Graph;
