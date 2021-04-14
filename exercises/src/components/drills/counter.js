import React, { useState, useEffect } from 'react';

/*

Rewrite in Hooks

class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  decrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <strong>Count: {this.state.count}</strong>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

*/

const Counter = () => {
    const [count, setCount] = useState(0);

    // Could also put increment / decrement functionality here
    const decrement = () => {
        return count === 0 ? null : setCount(count - 1);
    };

    return (
        <div>
            <strong>Count: {count}</strong>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    );
};

export default Counter;
