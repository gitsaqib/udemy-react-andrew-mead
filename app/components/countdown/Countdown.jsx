var React = require('react')
var ReactDOM = require('react-dom')
var ClockForm = require('./ClockForm')
var Clock = require('./Clock')

var Countdown = React.createClass({

  getInitialState : function(){
    var initialState = {time : "00:00"};
    return initialState;
  },
  secondsReciever : function(seconds){
    var time = this.getTime(seconds)
    this.updateStartTime(time);
  },
  getTime : function(totalSeconds){
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  },
  updateStartTime : function(time){
    var newState = {time : time};
    this.setState(newState);
  },
  render : function(){
    return (
      <div>
               <Clock time={this.state.time} />
               <ClockForm callback={this.secondsReciever} />
       </div>

    );
  }

});
module.exports = Countdown
