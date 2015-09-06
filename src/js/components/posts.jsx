var React = require('react');
var Post = require('./post')
var postStore = require('../stores/posts');
var Posts = React.createClass({
  getInitialState() {
    return{
      posts: postStore.getPosts()
    }
  },
  componentDidMount() {
    postStore.addChangeListener(this._updateStoreState);
  },
  componentWillUnmount() {
    postStore.removeChangeListener(this._updateStoreState);
  },
  _updateStoreState() {
    this.setState({
      posts: postStore.getPosts()
    });
  },
  render() {
    var posts = this.state.posts;
    var topLevelPosts = posts.filter(function(post) {
      if (post.type === 'post') {
        return true;
      }
    });

    if (this.props.type === 'PHOTOS') {
      topLevelPosts = topLevelPosts.filter(post => {
        return post.hasPhoto;
      });
    } else if (this.props.type === 'VIDEOS') {
      topLevelPosts = topLevelPosts.filter(post => {
        return post.hasVideo;
      });
    }

    var renderablePosts = topLevelPosts.map((post) => {
      var innerPost = post;
      innerPost.replies = posts.filter((possibleReply) => {
        if (possibleReply.type === 'reply' && possibleReply.replyTo === innerPost.id) {
          return true;
        }
      });

      return <Post viewType={this.props.viewType} post={innerPost} key={innerPost.id}/>;
    });

    return (
      <div>
        {renderablePosts}
      </div>
    );
  }
});

module.exports = Posts;
