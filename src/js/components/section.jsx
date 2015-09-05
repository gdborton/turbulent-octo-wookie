var React = require('react');

var Section = React.createClass({
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>
          {this.props.children}
        </div>
        <hr/>
      </div>
    )
  }
});

module.exports = Section;
