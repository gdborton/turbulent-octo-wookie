var React = require('react');
var PostDetailModal = require('./post-detail-modal');
var PostContent = require('./post-content');

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
      showingPhotoDetail: false
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

    return (
      <div className="post">
          <PostContent post={this.props.post}/>
          {media}
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
  }
});

module.exports = Post;
