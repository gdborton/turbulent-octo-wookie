var React = require('react');
var Hero = require('./hero');
var Header = require('./header');
var Posts = require('./posts');
var SubMenu = require('./sub-menu');
var OnYourMind = require('./on-your-mind');
var posts = require('../mockdata/posts');

var App = React.createClass({
  getInitialState() {
    return {
      posts: posts
    };
  },
  render() {
    var tabs = [
      {
        title: 'All Posts',
        value: 'ALL_POSTS',
        isActive: true
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

    return (
      <div className="container">
        <Header/>
        <Hero>
          <OnYourMind/>
          <SubMenu tabs={tabs}/>
        </Hero>
        <Posts posts={this.state.posts}/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
