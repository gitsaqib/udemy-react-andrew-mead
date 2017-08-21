var expect = require('expect');
var React = require("react")
var ReactDOM = require("react-dom")
var TestUtil = require("react-addons-test-utils")

var SigninInfo = require('../components/user/SigninInfo')

describe('SigninInfo Test Group 1', () => {
  it('SigninInfo Class path Test', () => {
    expect(SigninInfo).toExist();
  });
  it('Load component and test First Method', () => {
    var signinInfo = TestUtil.renderIntoDocument(<SigninInfo/>);
    
  });

});
