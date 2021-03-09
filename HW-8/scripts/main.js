$("#images > div:gt(0)").hide();

setInterval(function() {
  $('#images > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#images');
},  3000);

$("#text > div:gt(0)").hide();

setInterval(function() {
  $('#text > div:first')
    .fadeOut(1000)
    .next(5000)
    .fadeIn(1000)
    .end()
    .appendTo('#text');
},  3000);