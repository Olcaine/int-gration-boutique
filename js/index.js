$(document).ready(function(){

  for (var i = 0; i < catalog.length; i++) {
    $('#catalog').append(`
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <a href="product.html?produit=${i}" class="article">
          <article>
            <div class="img-fluid">
              <div class="polygon"></div>
              <img class="img-fluid" src="${catalog[i].picture}" alt="">
            </div>
            <div class="article-div">
              <h3>${catalog[i].statut}</h3>
              <h4>${catalog[i].name}</h4>
              <h5>${catalog[i].price}$</h5>
            </div>
          </article>
        </a>
      </div>
    `)
  }

  $('main h3:contains("BUY")').addClass("kk");
  $('main h3:contains("ON SALE")').addClass("pp");
  $('main h3:contains("SOLD OUT")').addClass("gy");
  $('main h3:contains("SOLD OUT")').parent("div").prev("div").addClass("div-img-polygon");

})
