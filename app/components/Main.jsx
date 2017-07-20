var React = require('react')
var ReactDOM = require('react-dom')
var {Route,Router,IndexRouter,hashHistory}  = require("react-router")

var Header = require('./Header')

var Main = React.createClass(
  {
      render : function(){
        return (
          <div>
            <Header></Header>
            {this.props.children}
          </div>
        );
      }
  }
);
module.exports = Main;
