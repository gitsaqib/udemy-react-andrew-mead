var React = require('react')
var ReactDOM = require('react-dom')
var NavigationItemList = require('./navigation/NavigationItemList')
var Avatar = require('./user/Avatar')
var Logout = require('./user/Logout')
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
                <ul className="menu">
                <li><Avatar /></li>
                <li>
                    <Logout/>
                </li>
              </ul>
            </div>

          </div>
        );
  }
module.exports = Header;
