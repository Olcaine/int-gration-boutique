$(document).ready(function(){
  console.log(catalog);

  for (var i = 0; i < catalog.length; i++) {
    $('#catalog').append(`
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <article>
          <img class="img-fluid" src="${catalog[i].picture}" alt="">
          <div class="article-div">
            <h3>${catalog[i].statut}</h3>
            <h4>${catalog[i].name}</h4>
            <h5>${catalog[i].price}$</h5>
          </div>
        </article>
      </div>
    `)
  }

  $('main h3:contains("BUY")').addClass("kk");
  $('main h3:contains("ON SALE")').addClass("pp");
  $('main h3:contains("SOLD OUT")').addClass("gy");
  $('main h3:contains("SOLD OUT")').parent("div").prev('img').addClass("sold-out");
})
