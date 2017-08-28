var React = require('react')
var ReactDOM = require('react-dom')

var Clock = React.createClass({

  render : function(){
    return (
      <div className="clock">
        <span className="clock-text">
            {this.props.time}
        </span>
    </div>
    );
  }

});
module.exports = Clock
