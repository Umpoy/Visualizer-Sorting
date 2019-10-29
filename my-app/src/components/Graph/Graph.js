import React, { Component } from 'react';
import Bar from './Bar';

import dataArray from '../helper/data';
import bubbleSort from '../algorithms/bubble';

const style = {
    height: '50vh'
}
class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray,
            bigArray: [],
            animated: false
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
        if (this.state.animated) {
            return
        } else {
            this.setState({ bigArray: bubbleSort(this.state.dataArray) });
            this.renderAnimation();
        }
    }

    renderAnimation = () => {
        let i = 0;
        const interval = setInterval(() => {
            this.setState({ dataArray: this.state.bigArray[i] });
            i++
            if (i >= this.state.bigArray.length) {
                clearInterval(interval);
                this.setState({ animated: true })
                return
            }
        }, 1)

    }

    render() {
        return (
            <div className="graph" style={style}>
                {this.renderToGraph()}
                <button className="btn btn-primary" onClick={this.swapNumbers}>Click</button>
            </div>

        )
    }
}

export default Graph;
