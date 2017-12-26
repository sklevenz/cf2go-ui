$(document).ready(function(){
  readTextFile("json/data.json", function(text){
     var landscapes = JSON.parse(text);
     console.log(landscapes);
     printTable(landscapes)
  });
});

function printTable(landscapes){
  $.each(landscapes, function (index, landscape) {
      $("#landscapes").append($('<tr/>')
        .append($('<td/>')
        .text(index))
        .append($('<td/>')
        .text(landscape.iaas))
        .append($('<td/>')
        .text(landscape.owner))
        .append($('<td/>')
        .text(landscape.labels))
        .append($('<td/>')
        .text(landscape.description))
        .append($('<td/>')
        .text(landscape.jumpbox))
        .append($('<td/>')
        .text(landscape.domain))
        .append($('<td/>')
        .append("<a href='" + landscape.url + "'>" + index + "</a>"))
      );
  });
}

function readTextFile(file, callback) {
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open("GET", file, true);
    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status == "200") {
            callback(req.responseText);
        }
    }
    req.send(null);
}
