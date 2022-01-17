import React, { Component } from 'react';


class Counter extends React.Component {

    state = {
        value: this.props.value
        // tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

    }

    handleIncrement = (product) => {
        // this.state.count++; // will not work
        console.log(product);
        this.setState({value: this.state.value + 1});
    }

    render() {
        return (
            // you have to return only one thing
            // it can be wrapped by a div
            // or use React.Fragment so that the wrapper will not be rendered
            <div>
                <h4>Counter #{this.props.id}</h4>

                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => {this.handleIncrement({id:1});}} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;

// history code

/*
<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
<button className='btn btn-secondary btn-sm'>Increment</button>

{this.state.tags.length === 0 && "Please create a new tag"}
                {this.renderTags()}
*/
