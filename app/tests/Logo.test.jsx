var expect = require('expect');
var React = require("react")
var ReactDOM = require("react-dom")

var Logo = require('../components/Logo')

describe('Logo Test Group 1', () => {
  it('Logo Class path Test', () => {
    expect(Logo).toExist();
  });
});
