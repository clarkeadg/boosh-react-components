import React, { Component, PropTypes } from 'react';

class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
  }

  render() {
    const { isChecked } = this.state;

    return (
      <input
        type="checkbox"
        checked={isChecked}
        onChange={this.toggleCheckboxChange} />
    );
  }
}

export default Checkbox;
