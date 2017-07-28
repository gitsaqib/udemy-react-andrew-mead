var React = require('react')
var ReactDOM = require('react-dom')
var {Link,IndexLink}  = require('react-router')

var ClientList = React.createClass(
  {
      render : function(){
                return (
                  <div >
                    <div >
                      <Link to="/SaveClient" className="button" >Add New</Link>
                    </div>
                  </div>
                );
      }
  }
);
module.exports = ClientList;
