var React = require('react');
var PostDetailModal = require('./post-detail-modal');
var PostContent = require('./post-content');
var Reply = require('./reply');

var Post = React.createClass({
  propTypes: {
    post: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      author: React.PropTypes.string.isRequired,
      content: React.PropTypes.string.isRequired,
      replies: React.PropTypes.array
    }).isRequired
  },

  getInitialState() {
    return {
      showingPhotoDetail: false,
      showingReplies: false
    }
  },

  render() {
    var media;
    if (this.props.post.hasPhoto || this.props.post.hasVideo) {
      var photoUrl = 'http://lorempixel.com/975/580?' + this.props.post.id;
      media = (
        <div className="media-container">
          <img src={photoUrl} onClick={this.showPhotoDetail}/>
          {this.state.showingPhotoDetail ? <PostDetailModal onClose={this.hidePhotoDetail} post={this.props.post} /> : null}
        </div>
      );
    }

    var replies = this.props.post.replies.map((reply, index) => {
      return (
        <div className="reply-post" key={index}>
          <PostContent post={reply}/>
        </div>
      );
    });
    replies.push(
        <Reply/>
    );

    return (
      <div className={'post' + (this.props.viewType === 'TILE_VIEW' ? ' tile' : '')}>
          <PostContent post={this.props.post} onClickExpand={this.toggleShowingReplies} expanded={this.state.showingReplies}/>
          {media}
          {this.state.showingReplies ? replies : null}
      </div>
    );
  },
  showPhotoDetail() {
    this.setState({
      showingPhotoDetail: true
    });
  },
  hidePhotoDetail() {
    this.setState({
      showingPhotoDetail: false
    });
  },
  toggleShowingReplies() {
    this.setState({
      showingReplies: !this.state.showingReplies
    });
  }
});

module.exports = Post;
