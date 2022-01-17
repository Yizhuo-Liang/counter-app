import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 3},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleDelete = (id) => {
        console.log('Event Handler Called' + id);
    };

    render() { 
        return (<div>
            {this.state.counters.map(counter => 
            <Counter onDelete={this.handleDelete} id={counter.id} key={counter.id} value={counter.value}>
                
            </Counter>)}
        </div>);
    }
}
 
export default Counters;