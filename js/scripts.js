var converter = function(raw, base){
  var decimal = 0;
  var value = 1;
  var hex = {
    "a":10,
    "b":11,
    "c":12,
    "d":13,
    "e":14,
    "f":15
  };
  for(var i = raw.length - 1; i >= 0; i--) {
    if(raw[i] in hex){
      decimal += (hex[raw[i]] * value);
    } else{
      decimal += (raw[i] * value);
    }
    value *= base;
  }
  return decimal;
}

$(document).ready(function(){
  $("form#num_converter").submit(function(event){
    var num_string = ($("input#num_string").val());
    var base = parseInt($("select#base").val());
    var result = converter(num_string, base);
    $(".decimal").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
