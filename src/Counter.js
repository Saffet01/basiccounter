import React, { Component } from 'react'


class Counter extends Component {

    increment = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    decrement = () => {
        this.setState({
            number : this.state.number - 1 
        })
    }

    state = {
        number: 0
    }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter;