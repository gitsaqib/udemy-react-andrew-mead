var React = require('react')
var ReactDOM = require('react-dom')

var ClockForm = React.createClass({

  updateTime : function(){
    this.props.callback(this.refs.seconds.value);
  },
  render : function(){
    return (
    <div>
          <input ref="seconds" placeholder="seconds"></input>
          <button onClick={this.updateTime}>Start</button>
    </div>
    );
  }

});
module.exports = ClockForm
