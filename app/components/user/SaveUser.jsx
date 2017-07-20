var React = require('react')
var ReactDOM = require('react-dom')

var SaveUser = React.createClass(
  {
      render : function(){
                return (
                  <div >
                      <form >
                        <input type="text"></input>
                        <button>Save User</button>
                      </form>
                  </div>
                );
      }
  }
);
module.exports = SaveUser;
