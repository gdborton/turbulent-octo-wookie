var React = require('react');
var Index = require('./views/index');
var Settings = require('./views/settings');

var App = React.createClass({
  render() {
    return (
      <Settings/>
    );
  }
});

React.render(<App/>, document.querySelector('body .container'));
