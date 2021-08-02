/*Récupération des params dans l'URL */

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

/* Formattage prix */
var formatter = new Intl.NumberFormat('fr-FR', {style: 'currency',
currency: 'EUR', minimumFractionDigits: 0});

/* Récupération de l'URL produit et affichage du contenu correspondant */
fetch("http://localhost:3000/api/cameras/" + id)
.then(data => data.json())
.then(productLive =>{
  document.querySelector('.container').innerHTML += 
  `<div class="popup">
      <p class="popup__content">${productLive.name} a bien été ajouté au panier<br><a href="cart.html" class="popup__link">Voir mon panier</a></p>
  </div>

  <div class="container__title">
      <h1 class="container__title__item">Découvrez le ${productLive.name}</h1>
  </div>

  <div class="card product" data-id="${productLive._id}">
    <div class="card__banner">
      <img src="${productLive.imageUrl}" class="card__banner__img">
    </div>
  
    <div class="card__content">
      <h2 class="card__content__title">${productLive.name}</h2>
      <p class="card__content__price">${formatter.format(productLive.price)}</p>
      <p class="card__content__description">${productLive.description}</p>
    </div>

    <div class="selector">
      <div class="select">
              <select name="objectifs" id="lenses" class="select__lenses">
                  <option value="" class="select__lenses__item"> Veuillez choisir un objectif </option>
                  <option value="dog" class="select__lenses__item">${productLive.lenses[0]}</option>
                  <option value="cat" class="select__lenses__item">${productLive.lenses[1]}</option> 
              </select>
              <span class="select__lenses__arrow"></span>
      </div>
    </div>

    <div class="card__add">
      <button class="card__add__btn">Ajouter au panier</button>
    </div>
  </div>`;
  /* Ajout du produit au panier et animation de la popup */
  
  let cardProduct = document.querySelector('.card');
  cardProduct.addEventListener("click",function(b){
    if(b.target.getAttribute('class') === 'card__add__btn'){
      addToCart(productLive);
      document.querySelector('.popup').classList.toggle('animate');
    } 
  })
})


