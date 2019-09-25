import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrayItems: 20
        };
    }

    handleArrayItemsChange = event => {
        const arrayItems = event.target.value;
        this.setState({ arrayItems });
    }

    render() {
        const { arrayItems } = this.state;

        return (
            <div className="metronome">
                <div className="arrayItems-slider">
                    <div>{arrayItems} items in array</div>
                    <input
                        type="range"
                        min="8"
                        max="240"
                        value={arrayItems}
                        onChange={this.handleArrayItemsChange} />
                </div>
            </div>
        );
    }
}

export default Slider;