var React = require('react');

var Hero = require('../hero');
var Header = require('../header');
var Posts = require('../posts');
var SubMenu = require('../sub-menu');
var OnYourMind = require('../on-your-mind');

var Index = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'ALL_POSTS'
    };
  },
  render() {
    var tabs = [
      {
        title: 'All Posts',
        value: 'ALL_POSTS'
      },
      {
        title: 'Photos',
        value: 'PHOTOS'
      },
      {
        title: 'Videos',
        value: 'VIDEOS'
      }
    ];

    tabs = tabs.map(tab => {
      var innerTab = tab;
      if (innerTab.value === this.state.selectedTab) {
        innerTab.isActive = true;
      }
      return innerTab;
    });

    return (
      <div className="container">
        <Hero>
          <OnYourMind/>
          <SubMenu tabs={tabs} onTabClick={this._handleTabClick}/>
        </Hero>
        <div className="container small">
          <Posts type={this.state.selectedTab}/>
        </div>
      </div>
    );
  },
  _handleTabClick(value) {
    this.setState({
      selectedTab: value
    });
  }
});

module.exports = Index;
