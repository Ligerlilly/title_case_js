String.prototype.title_case = function () {
  var words = this.split(' ');
  var word = '';
  //console.log(words);
  if (words.length > 1) {
    //console.log('hi');
    for (var i=0; i < words.length; i++) {
      if (words[i] != 'of' && words[i] != 'the' || i === 0){
        word = word.concat( words[i].charAt(0)
        .toUpperCase() + words[i].slice(1) + ' ');
      }
      else {
        word = word.concat( words[i] + ' ');
      }
    }
    return word.trim();

  }
  else {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
};
