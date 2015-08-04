
String.prototype.title_case = function () {
  var words = this.split(' ');
  var word = '';
  //console.log(words);
  if (words.length > 1) {
    console.log('hi');
    for (var i=0; i < words.length; i++) {
      word = word.concat( words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ');
    }
    return word.trim();

  }
  else {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
};


var assert = require("assert")
describe( 'String#title_case', function() {
  it( 'should capitalize first letter of a string', function () {
      assert.equal( "hi".title_case(), "Hi" );
  });

  it( 'should capitalize all words in a multi-word string', function(){
    assert.equal( 'Hi there'.title_case(), "Hi There" )
  })

});
