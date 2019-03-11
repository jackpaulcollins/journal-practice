
export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function(){
  var splitCountedWord = this.body.split(" ").length;
  return splitCountedWord;
}
