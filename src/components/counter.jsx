import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };
  // removing state to achieve the Moment Of Truth
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this) for binding this keyword to the current class
  //     console.log(this);
  //   }
  // handleIncrement = () => {
  //   // let { count } = this.state; is undfined because USESTRICT key (directly called function) so we have to bind 'this' property to the funciton
  //   // count++;
  //   // this.state.count++;
  //   // console.log("Increment button is clicked", this);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleDecrement = () => {
  //   this.setState({ value: this.state.value - 1 });
  // };

  render() {
    // console.log(this.props.value);
    const { onDelete, onIncrement, onDecrement, counter } = this.props;
    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    // console.log(this);
    const { value } = this.props.counter;
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
