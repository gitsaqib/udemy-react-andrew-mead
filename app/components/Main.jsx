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
            <div className = "row">
              <div className = "columns medium-6 large-4 small-centered">
                {this.props.children}
              </div>
            </div>

          </div>
        );
      }
  }
);
module.exports = Main;
