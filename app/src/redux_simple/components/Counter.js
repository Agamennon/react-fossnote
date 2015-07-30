import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
    static propTypes = {
        side: PropTypes.string.isRequired,
        togglePanel: PropTypes.func.isRequired
    };

    render() { //    const { increment, incrementIfOdd, decrement, counter } = this.props;
        const {  togglePanel, side} = this.props;
        return (
            <p>
                Panel State: -- {side} --
                {' '}
                <button onClick={togglePanel}>toggle</button>
            </p>
        );
    }
}


