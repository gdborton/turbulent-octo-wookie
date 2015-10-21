var React = require('react');

var urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var twitterHandleRegex = /^@(\w){1,15}/;

var PostContent = React.createClass({
  render() {
    var content = this.props.post.content.split(' ');
    content = content.map(function(word, index) {
      var innerContent;
      if (urlRegex.test(word)) {
        innerContent = <a href={word.indexOf('http') === -1 ? 'https://' + word : word} key={index}>{word}</a>;
      } else if(twitterHandleRegex.test(word)) {
        innerContent = <a href={'https://twitter.com/' + word.match(twitterHandleRegex)[0].replace(/@/, '')} key={index}>{word}</a>;
      } else {
        innerContent = word + ' ';
      }
      return <span key={index}>{innerContent}</span>
    });

    var expandText = <div className={'expand-button' + (this.props.expanded ? ' expanded': '')}><a onClick={this.props.onClickExpand}>{this.props.expanded ? 'Collapse' : 'Expand'}</a></div>;

    return (
      <div className="post-primary-content">
        <div className="profile-picture small">
          <img src={"http://lorempixel.com/85/85/people/?author=" + this.props.post.author}/>
        </div>
        <div className="content-body">
          <div className="post-header">
            <span className="author">{this.props.post.author}</span>
            <div className="post-icons">
              <span className="reply-icon icon"/>
              <span className="heart-icon icon"/>
              <span>1m</span>
            </div>
          </div>
          <span className="content">{content}</span>
          {this.props.post.replies && this.props.post.replies.length ? expandText : null}
        </div>
      </div>
    );
  }
});

module.exports = PostContent;
