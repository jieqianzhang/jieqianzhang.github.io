var row_number;
function addRows(input) {
  row_number = Math.floor(input.length / 3) + 1;
  for (var i = 0; i < row_number; i ++) {
    $('#portfolio').append("<div class='row'></div>");
  }
}

function fillPage(input) {
  for (var i = 0; i < 3; i++) {
    $('#portfolio .row:first').append('<div class="span4"><a href="' + input[i].link + '" target="_blank"><div class="wrapper"><img src="' + input[i].imglink + '"></div></a><a href="' + input[i].link + '" target="_blank"><h3 class="pub">' + input[i].pub + '</h3></a><p><span class="type">' + input[i].type + '</span>' + input[i].description + '</p></div>');
  }
  for (var i = 3; i < input.length; i++) {
    row = Math.floor(i/3) + 1;
    $('#portfolio .row:nth-child(' + row + ')').append('<div class="span4"><a href="' + input[i].link + '" target="_blank"><div class="wrapper"><img src="' + input[i].imglink + '"></div></a><a href="' + input[i].link + '" target="_blank"><h3 class="pub">' + input[i].pub + '</h3></a><p><span class="type">' + input[i].type + '</span>' + input[i].description + '</p></div>');
  }
}


