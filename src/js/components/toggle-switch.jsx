var React = require('react');

var ToggleSwitch = React.createClass({
  getInitialState() {
    return {
      on: false
    };
  },
  render() {
    return (
      <label className="toggle" onClick={this._toggleOn}>
        <div className={'toggle-bar' + (this.state.on ? ' on' : '')}>
          <div className='toggle-button' />
        </div>
        {this.props.children}
      </label>
    )
  },
  _toggleOn() {
    this.setState({
      on: !this.state.on
    });
  }
});

module.exports = ToggleSwitch;
