class Produit{
  constructor(jsonProduit){
    this.img = jsonProduit.imageUrl,
    this.name = jsonProduit.name,
    this.price = jsonProduit.price + " €",
    this.description = jsonProduit.description
  }
}

fetch("http://localhost:3000/api/cameras")
  .then(data => data.json())
  .then(jsonListProduit =>{
    for(let jsonProduit of jsonListProduit){
      let produit = new Produit(jsonProduit);
      document.querySelector('.container').innerHTML += 
      `<div class="card">
        <div class="card__banner"><img src="${produit.img}" class="card__banner__img"></div>
        <div class="card__content">
          <h2 class="card__content__title">${produit.name}</h2>
          <p class="card__content__price">${produit.price}</p>
          <p class="card__content__description">${produit.description}</p>
          </div>
          <div class="card__add"><button>Ajouter au panier</button></div>
      </div>`
    }
  });