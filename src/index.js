$(document).ready(function() {
  $("#entry-form").submit(function(event) {
    event.preventDefault();
    let title = $("#title").val();
    let body = $("#body").val();

    let entry = new Entry(title, body);
    console.log(entry);
    console.log(entry.numberOfWords());
    console.log(entry.countVC());
    console.log(entry.getTeaser());
  })
});