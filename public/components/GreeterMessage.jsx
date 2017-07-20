var React = require('react')

var GreeterMessage = React.createClass({
    render : function () {
      return (
      <div>
            <h1> submitted value :  {this.props.userName}  </h1>
            <p>
               Message : {this.props.message}
            </p>
      </div>
      );
    }
});

module.exports = GreeterMessage;
