var React = require('react');

var Footer = React.createClass({
  render(){
    return (
      <div className="footer">
        <a href="#/about">About Us</a>
        <a href="#/support">Support</a>
        <a href="#/privacy">Privacy</a>
        <a href="#/terms">Terms</a>
        © 2014 SimplySocial
      </div>
    );
  }
});

module.exports = Footer;
