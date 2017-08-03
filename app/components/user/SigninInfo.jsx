var React = require('react')
var ReactDOM = require('react-dom')

var SigninInfo = React.createClass(
  {
    sentItToServer : function (e) {
      e.preventDefault();
      var currentContext = this;
      var name = this.refs.username.value ;
      if(this.refs.username.value) {
        this.refs.username.value = "";
      }
      var password = this.refs.password.value ;
      if(this.refs.password.value) {
        this.refs.password.value = "";
      }
      window.location.hash = "#/Client?clientId="+encodeURIComponent(name);
    },
    render : function(){
            return (
              <form onSubmit={this.sentItToServer}>
                <ul className = "menu">
                    <li>
                      <input type="text" ref = "username" placeholder="User Id"></input>
                    </li>
                    <li>
                      <input type="password" ref = "password" placeholder="password"></input>
                    </li>
                    <li>
                      <button className = "button">Sign In</button>
                    </li>

                </ul>



              </form>
            );
      }
  }
);
module.exports = SigninInfo;
