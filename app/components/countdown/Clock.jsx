var React = require('react')
var ReactDOM = require('react-dom')

var Clock = React.createClass({

  render : function(){
    return (
    <div>
        {this.props.time}
    </div>
    );
  }

});
module.exports = Clock
