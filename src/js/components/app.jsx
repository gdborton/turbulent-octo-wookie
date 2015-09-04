var React = require('react');
var Index = require('./views/index');

var App = React.createClass({
  render() {
    return (
      <Index/>
    );
  }
});

React.render(<App/>, document.querySelector('body .container'));
