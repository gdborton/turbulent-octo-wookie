var React = require('react');
var urlRegex = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?/;
urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
var Post = React.createClass({
  propTypes: {
    post: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      author: React.PropTypes.string.isRequired,
      content: React.PropTypes.string.isRequired,
      replies: React.PropTypes.array
    }).isRequired
  },

  render() {
    var content = this.props.post.content.split(' ');7
    content = content.map(function(word, index) {
      if (urlRegex.test(word)) {
        return <span><a href={word.indexOf('http') === -1 ? 'https://' + word : word} key={index}>{word}</a> </span>;
      } else {
        return word + ' ';
      }
    });

    return (
      <div className="post">
          <div className="primary-content">
            <div className="profile-picture small">
              <img src={"http://lorempixel.com/50/50/people/?author=" + this.props.post.author}/>
            </div>
            <div className="content-body">
              <div className="post-header">
                <span className="author">{this.props.post.author}</span>
                <button>pretend this is a button</button>
              </div>
              <span className="content">{content}</span>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = Post;
