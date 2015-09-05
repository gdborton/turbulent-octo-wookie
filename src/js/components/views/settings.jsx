var React = require('react');
var Header = require('../header');
var FancyInput = require('../fancy-input');
var Section = require('../section');
var ToggleSwitch = require('../toggle-switch');

var Settings = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <FancyInput leftContent={'asdf'} rightContent='Change' type='password'/>
        <h1>Settings</h1>
        <Section title="Account">asdf</Section>
        <Section title="Notifications">fdsa</Section>
        <Section title="Privacy">asdf</Section>
        <ToggleSwitch>Hello</ToggleSwitch>
      </div>
    );
  }
});

module.exports = Settings;
