/* Fomatage des prix du panier */
var formatter = new Intl.NumberFormat('fr-FR', {style: 'currency',
currency: 'EUR', minimumFractionDigits: 0, minimumIntegerDigits: 2});

let listProduit = [];

/* Récupération des données de l'API et affichage sur le front */
fetch("http://localhost:3000/api/cameras")
  .then(data => data.json())
  .then(jsonListProduit =>{
    let listProduit = jsonListProduit;
    for(let jsonProduit of jsonListProduit){
      document.querySelector('.container').innerHTML += 
      `<a href="product.html?id=${jsonProduit._id}" class="container__link">
      <div class="card" data-id="${jsonProduit._id}">
        <div class="card__banner"><img src="${jsonProduit.imageUrl}" class="card__banner__img"></div>
        <div class="card__content">
          <h2 class="card__content__title">${jsonProduit.name}</h2>
          <p class="card__content__price">${formatter.format(jsonProduit.price/100)}</p>
          <p class="card__content__description">${jsonProduit.description}</p>
          </div>
      </div>
      </a>`
    }
  });

  

  
  