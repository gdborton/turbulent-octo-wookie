var React = require('react');

var Hero = require('../hero');
var Header = require('../header');
var Posts = require('../posts');
var SubMenu = require('../sub-menu');
var OnYourMind = require('../on-your-mind');

var Index = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'ALL_POSTS',
      selectedView: 'LIST_VIEW'
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

    var buttons = [
      {
        classNames: 'icon list-icon',
        value: 'LIST_VIEW'
      },
      {
        classNames: 'icon tile-icon',
        value: 'TILE_VIEW'
      }
    ];

    buttons.forEach(button => {
      if (button.value === this.state.selectedView) {
        button.classNames = button.classNames + ' active';
      }
    });

    return (
      <div className="container">
        <Hero>
          <OnYourMind/>
          <SubMenu tabs={tabs} buttons={buttons} onButtonClick={this._handleButtonClick} onTabClick={this._handleTabClick}/>
        </Hero>
        <div className={'container' + (this.state.selectedView === 'LIST_VIEW' ? ' small' : ' medium')}>
          <Posts type={this.state.selectedTab} viewType={this.state.selectedView}/>
        </div>
      </div>
    );
  },
  _handleTabClick(value) {
    this.setState({
      selectedTab: value
    });
  },
  _handleButtonClick(value) {
    this.setState({
      selectedView: value
    });
  }
});

module.exports = Index;
