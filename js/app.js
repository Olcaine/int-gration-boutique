$(document).ready(function(){
  console.log(catalog);

  for (var i = 0; i < catalog.length; i++) {
    $('#catalog').append(`
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <a href="product.html?produit=${i}">
          <article>
            <img class="img-fluid" src="${catalog[i].picture}" alt="">
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
  $('main h3:contains("SOLD OUT")').parent("div").prev('img').addClass("sold-out");



  $(document).ready(function(){
    var url = document.URL;
    var singleUrl = new URL(url);
    var productId = singleUrl.searchParams.get("produit");

    $('#single-produit').append(`
      <div class="row">
        <div class="col-12 product-title">
          <h2>${catalog[productId].name}</h2>
        </div>
        <div class="col-12 col-md-6 product-image">
          <img class="img-fluid" src="${catalog[productId].picture}" alt="">
        </div>
        <div class="col-12 col-md-6 product-detail">
          <h3>${catalog[productId].statut}</h3>
          <p>${catalog[productId].description}</p>
          <h5>${catalog[productId].price}$</h5>
          <button class="btn btn-primary" type="button" name="button">Acheter</button>
        </div>
      </div>
    `)
  })

})
