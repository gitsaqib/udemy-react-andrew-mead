var React = require('react')
var ReactDOM = require('react-dom')
var NavigationItemList = require('./navigation/NavigationItemList')
var SigninInfo = require('./user/SigninInfo')
var Logo = require('./Logo')

var Header = (props) =>
  {
        return (
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li><Logo /></li>
                <li>
                    <NavigationItemList />
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <SigninInfo />
            </div>

          </div>
        );
  }
module.exports = Header;
