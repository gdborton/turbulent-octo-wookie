var React = require('react');

var Hero = React.createClass({
  render() {
    return (
      <div className="hero">
        <div className="container small">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Hero;
