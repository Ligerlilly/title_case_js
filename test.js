
require('./title_case.js');

var assert = require("assert")
describe( 'String#title_case', function() {
  it( 'should capitalize first letter of a string', function () {
      assert.equal( "hi".title_case(), "Hi" );
  });

  it( 'should capitalize all words in a multi-word string', function(){
    assert.equal( 'Hi there'.title_case(), "Hi There" )
  })

});
