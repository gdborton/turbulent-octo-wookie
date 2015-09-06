var React = require('react');
var Header = require('../header');
var FancyInput = require('../fancy-input');
var Section = require('../section');
var ToggleSwitch = require('../toggle-switch');
var RadioSwitches = require('../radio-switches');

var Settings = React.createClass({
  render() {
    var options = [
      'allow anyone to tag me',
      'only allow people I follow to tag me',
      'don\'t allow anyone to tag me'
    ];

    return (
      <div>
        <div className="small container">
          <h1>Settings</h1>
          <Section title="Account">
            <div className="profile-picture-container">
              <div className="profile-picture">
                <img src="http://lorempixel.com/85/85/people/?author=Me"/>
              </div>
              <button className="secondary change-picture">change</button>
            </div>
            <div className="account-settings">
              <FancyInput leftContent={<span className="icon person-icon"/>} />
              <FancyInput leftContent={<span className="icon mail-icon"/>} />
              <FancyInput leftContent={<span className="icon lock-icon"/>} rightContent='Change' type='password'/>
            </div>
          </Section>
          <Section title="Notifications">
            <ToggleSwitch>email me when my posts are marked as favorites</ToggleSwitch>
            <ToggleSwitch>email me when I'm mentioned</ToggleSwitch>
            <ToggleSwitch>email me when I get a reply</ToggleSwitch>
            <ToggleSwitch>email me when someone follows me</ToggleSwitch>
          </Section>
          <Section title="Privacy">
            <RadioSwitches name="privacy" options={options}/>
            <ToggleSwitch>add a location to my posts</ToggleSwitch>
            <ToggleSwitch>let others find me by my email address</ToggleSwitch>
            <ToggleSwitch>tailor ads based on my information</ToggleSwitch>
          </Section>
          <button>Save Changes</button>
        </div>
      </div>
    );
  }
});

module.exports = Settings;
