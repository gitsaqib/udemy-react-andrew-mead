
var React = require('react')
var ReactDOM = require('react-dom')

var Logout = React.createClass(
  {
    sentItToServer : function (e) {
      e.preventDefault();
      console.log("Logged Out");
//      if(this.validateInput()){
//          var currentContext = this;
//          var name = this.refs.username.value ;
//          if(this.refs.username.value) {
//            this.refs.username.value = "";
//          }
//          window.location.hash = "#/Client?clientId="+encodeURIComponent(name);
//      }
    },
//    validateInput : function () {
//      return
//      (
//          (this.refs.username.value && this.refs.username.value!="")
//      );
//    },
    render : function(){
            return (
                    <button type="submit" className="button expanded" value="Log in" onClick={this.sentItToServer}></button>
            );
      }
  }
);
module.exports = Logout;
