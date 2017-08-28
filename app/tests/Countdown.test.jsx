var expect = require('expect');
var React = require("react")
var ReactDOM = require("react-dom")
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('../components/countdown/Countdown')

describe('Countdown Test Group 1', () => {
  it('Countdown Class path Test', () => {
    expect(Countdown).toExist();
  });

    it('should format seconds', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = countdown.getTime(seconds);

      expect(actual).toBe(expected);
    });



});
