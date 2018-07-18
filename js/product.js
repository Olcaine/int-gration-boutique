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
