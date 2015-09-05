var React = require('react');

var ToggleSwitch = React.createClass({
  getInitialState() {
    return {
      on: false
    };
  },
  render() {
    return (
      <div className={'toggle-bar' + (this.state.on ? ' on' : '')} onClick={this._toggleOn}>
        <div className='toggle-button' />
      </div>
    )
  },
  _toggleOn() {
    this.setState({
      on: !this.state.on
    });
  }
});

module.exports = ToggleSwitch;
