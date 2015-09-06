var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;
var Index = require('./views/index');
var Settings = require('./views/settings');
var Footer = require('./footer');
var NotFound = require('./views/not-found');
var Header = require('./header');

var App = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="index" handler={Index}/>
    <Route name="settings" handler={Settings}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.querySelector('body .container'));
});
