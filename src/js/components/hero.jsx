var React = require('react');

var Hero = React.createClass({
  render() {
    return (
      <div className="hero">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Hero;
