var React = require('react');

var urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var twitterHandleRegex = /^@(\w){1,15}/;

var PostContent = React.createClass({
  render() {
    var content = this.props.post.content.split(' ');7
    content = content.map(function(word, index) {
      if (urlRegex.test(word)) {
        return <span><a href={word.indexOf('http') === -1 ? 'https://' + word : word} key={index}>{word}</a> </span>;
      } else if(twitterHandleRegex.test(word)) {
        return <span><a href={'https://twitter.com/' + word.match(twitterHandleRegex)[0].replace(/@/, '')} key={index}>{word}</a></span>
      } else {
        return word + ' ';
      }
    });

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
        </div>
      </div>
    );
  }
});

module.exports = PostContent;
