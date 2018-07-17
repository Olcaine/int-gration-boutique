$(document).ready(function(){
  $('main h3:contains("BUY")').addClass("kk");
  $('main h3:contains("ON SALE")').addClass("pp");
  $('main h3:contains("SOLD OUT")').addClass("gy");
  $('main h3:contains("SOLD OUT")').parent("div").prev('img').addClass("sold-out");
})
