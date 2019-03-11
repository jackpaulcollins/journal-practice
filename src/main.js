import './styles.css';
import { Entry } from './journal';

$(document).ready(function() {
  $('.journal').submit(function(event) {
    event.preventDefault();
    var entryTitle = $(".title").val();
    var entryInput = $(".entry").val();
    var newEntry = new Entry(entryTitle, entryInput);
    var wordCount = newEntry.countWords();
    var checkLetters = newEntry.checkLetters();
    var firstSent = newEntry.firstSentence();
    $(".displayEntries").append("<h2>" + newEntry.title + "</h2>" + "<br>" + "<h5>" + newEntry.body + "<h5>" + "<br>" + "<p>" + "Your entry is " + wordCount + " words long." + "</p>" + "<br>" + "<p>" + "Amount of vowels in your entry: " + checkLetters.vowels.length + "</p>" + "<br>" + "Amount of consonants in your entry: " + "<p>" + checkLetters.consonants.length + "</p>" + firstSent);

  });
});
