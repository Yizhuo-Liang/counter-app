import React, { Component } from 'react';

class Counter extends React.Component {

    state = {
        count: 0
    };

    render() { 
        return (
            // you have to return only one thing
            // it can be wrapped by a div
            // or use React.Fragment so that the wrapper will not be rendered
            <div>
                <span className="badge badge-pill badge-primary">{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;