var React = require('react');
var Post = require('./post')

var Posts = React.createClass({
  render() {
    var posts = this.props.posts;
    var topLevelPosts = posts.filter(function(post) {
      if (post.type === 'post') {
        return true;
      }
    });

    var renderablePosts = topLevelPosts.map(function(post) {
      var innerPost = post;
      innerPost.replies = posts.filter(function(possibleReply) {
        if (possibleReply.type === 'reply' && possibleReply.replyTo === innerPost.id) {
          return true;
        }
      });

      return <Post post={innerPost} key={innerPost.id}/>;
    });

    return (
      <div>
        {renderablePosts}
      </div>
    );
  }
});

module.exports = Posts;
