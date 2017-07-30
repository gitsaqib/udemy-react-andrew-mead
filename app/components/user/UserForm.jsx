var React = require('react')
var ReactDOM = require('react-dom')


var UserForm = React.createClass(
  {

      sentItToServer : function (e) {
        e.preventDefault();
        var currentContext = this;
        var location = this.refs.name.value ;
        if(this.refs.name.value) {
          this.refs.name.value = "";
        }
        currentContext.props.callback(location);
      },
      render : function(){
                return (
                  <div >
                      <form onSubmit={this.sentItToServer}>
                        <input type="text" ref = "name"></input>
                        <button className="button expanded hollow">Save User</button>
                      </form>
                  </div>
                );
      }
  }
);
module.exports = UserForm;
