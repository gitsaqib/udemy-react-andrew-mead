var React = require('react')
var ReactDOM = require('react-dom')
var OpenweatherMap = require('../../../api/OpenweatherMap')

var SaveUser = React.createClass(
  {

      sentItToServer : function (e) {
        e.preventDefault();
        var currentContext = this;
        var name = this.refs.name.value ;
        if(this.refs.name.value) {
          this.refs.name.value = "";
        }
        currentContext.props.callback("Loading ...");
        OpenweatherMap.getTemp(name).then(
          function(data){
            debugger;
            currentContext.props.callback(name+" "+data);
          },function(error){
            debugger;            
            console.log(error.message);
            currentContext.props.callback(error.message);
          });

      },
      render : function(){
                return (
                  <div >
                      <form onSubmit={this.sentItToServer}>
                        <input type="text" ref = "name"></input>
                        <button>Save User</button>
                      </form>
                  </div>
                );
      }
  }
);
module.exports = SaveUser;
