var React = require('react')
var ReactDOM = require('react-dom')
var Routes = require('./routes/routes')

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style!css!sass!./styles/app.scss');

ReactDOM.render(
  <Routes />,
  document.getElementById('app')
)
