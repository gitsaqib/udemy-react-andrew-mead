var React = require('react')
var ReactDOM = require('react-dom')
var NavigationItemList = require('./navigation/NavigationItemList')
var SigninInfo = require('./user/SigninInfo')
var Logo = require('./Logo')

var Header = React.createClass(
  {
      render : function(){
                return (
                  <div >
                    <Logo />
                    <NavigationItemList />
                    <SigninInfo />
                  </div>
                );
      }
  }
);
module.exports = Header;
