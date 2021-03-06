var React = require('react');

var Section = React.createClass({
  render() {
    return (
      <section>
        <h3>{this.props.title}</h3>
        <div className="clearfix">
          {this.props.children}
        </div>
      </section>
    )
  }
});

module.exports = Section;
