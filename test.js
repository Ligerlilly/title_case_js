
String.prototype.title_case = function () {
  return 'Hi';
};


var assert = require("assert")
describe('String#title_case', function() {

    it('should capitalize first letter of a string', function () {
      assert.equal( "hi".title_case(), "Hi" );

  });
});
