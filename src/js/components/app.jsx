var React = require('react');
var Hero = require('./hero');
var Header = require('./header');
var Posts = require('./posts');
var SubMenu = require('./sub-menu');
var posts = require('../mockdata/posts');

var App = React.createClass({
  getInitialState() {
    return {
      posts: posts
    };
  },
  render() {
    return (
      <div className="container">
        <Header/>
        <Hero>
          <SubMenu textItems={['test', 'test2']}/>
        </Hero>
        <Posts posts={this.state.posts}/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
