import './styles.css';
import { Entry } from './journal';

$(document).ready(function() {
  $('.journal').submit(function(event) {
    event.preventDefault();
    var entryTitle = $(".title").val();
    var entryInput = $(".entry").val();
    var newEntry = new Entry(entryTitle, entryInput);
    var wordCount = newEntry.countWords();
    $(".displayEntries").append("<h2>" + newEntry.title + "</h2>" + "<br>" + "<h5>" + newEntry.body + "<h5>" + "<br>" + "<p>" + "Your entry is " + wordCount + " words long." + "</p>");
  });
});
