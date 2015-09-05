var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Index = require('./views/index');
var Settings = require('./views/settings');

var App = React.createClass({
  render() {
    return (
      <RouteHandler/>
    );
  }
});

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="index" handler={Index}/>
    <Route name="settings" handler={Settings}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.querySelector('body .container'));
});
