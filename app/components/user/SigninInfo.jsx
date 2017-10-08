var React = require('react')
var ReactDOM = require('react-dom')

var SigninInfo = React.createClass(
  {
    sentItToServer : function (e) {
      e.preventDefault();
      if(this.validateInput()){
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
      }
    },
    validateInput : function () {
      return
      (
          (this.refs.username.value && this.refs.username.value!="")
      &&  (this.refs.password.value && this.refs.password.value!="")
      );
    },
    render : function(){
            return (
                    <div class="row column align-center medium-6 large-4 container-padded">
                    <form className="log-in-form">
                        <h4 className="text-center">Log in with you email account</h4>
                        <label>Email
                            <input type="text" placeholder="sa" ref="username"></input>
                        </label>
                        <label>Password
                            <input type="password" placeholder="Password" ></input>
                        </label>
                        <input id="show-password" type="checkbox"></input>
                        <label for="show-password">Show password</label>
                        <p><input type="submit" className="button expanded" value="Log in"></input></p>
                        <p className="text-center"><a href="#">Forgot your password?</a></p>
                    </form>
                 </div>
            );
      }
  }
);
module.exports = SigninInfo;
