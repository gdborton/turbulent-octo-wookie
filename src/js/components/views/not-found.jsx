var React = require('react');

var NotFound = React.createClass({
  render() {
    return (
      <div className="small container">
        <h1>Well that's embarassing...</h1>
        <p>
          Due to time limitations, not all pages were built out, and this is one of the pages that didn't make the cut.
        </p>
        <p>
          Hopefully you can enjoy this relevant 1987 music video, as much as the content you expected to see.
        </p>
        <h2>Rick Astley's "Never Gonna Give You Up"</h2>
        <iframe width="480" height="360" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
});

module.exports = NotFound;
