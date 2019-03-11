
export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function(){
  var splitCountedWord = this.body.split(" ").length;
  return splitCountedWord;
}

Entry.prototype.checkLetters = function() {
  var splitString = this.body.split("");
  var wordObject = {
    vowels: [],
    consonants: [],
  }

  for (var x=0; x < splitString.length; x++) {
    if(/[aeiou]/i.test(splitString[x])) {
      wordObject.vowels.push(splitString[x]);
    } else if ((splitString[x] !== " ") && !(/[!?.,'"*&%1234567890#@%^*()/|+=-_]/.test(splitString[x])))
       {
        wordObject.consonants.push(splitString[x]);
      }
    }


  return wordObject;
}

Entry.prototype.firstSentence = function(){
  var splitSentence = this.body.split(" ");
  var firstEight = splitSentence.slice(0, 8);
  var joinFirstEight = firstEight.join(" ");
  var splitFirstEight = joinFirstEight.split("");
  for (var x=0; x < splitFirstEight.length; x++) {
    if ((splitFirstEight[x] === ".") || (splitFirstEight[x] === "?") || (splitFirstEight[x] === "!")) {
      var finalProduct = splitFirstEight.slice(0,x+1).join("");
      console.log(finalProduct)
      break;
    }
  }
  return finalProduct;
}


// if ((splitFirstEight[x] != ".") || (splitFirstEight[x] != "?") || (splitFirstEight[x] != "!")) {
//   return joinFirstEight;
// }
