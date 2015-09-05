var React = require('react');

var RadioSwitches = React.createClass({
  getInitialState() {
    return {
      selected: this.props.options[0]
    }
  },
  render() {
    var inputs = this.props.options.map((option, index) => {
      return (
        <label onClick={this.setSelected.bind(this, option)}>
          <div className="radio">
            <div className={'radio-inner' + (option === this.state.selected ? ' checked' : '')}></div>
          </div>
          {option}
        </label>
      )
    });
    return (
      <div className="radio-switches">
        {inputs}
      </div>
    );
  },
  setSelected(value) {
    this.setState({
      selected: value
    });
  }
});

module.exports = RadioSwitches;
