var formatter = new Intl.NumberFormat('fr-FR', {});

/* Récupération des données de l'API et affichage sur le front */
fetch("http://localhost:3000/api/cameras")
  .then(data => data.json())
  .then(jsonListProduit =>{
    for(let jsonProduit of jsonListProduit){
      document.querySelector('.container').innerHTML += 
      `<a href="product.html" class="container__link">
      <div class="card" data-id="${jsonProduit._id}">
        <div class="card__banner"><img src="${jsonProduit.imageUrl}" class="card__banner__img"></div>
        <div class="card__content">
          <h2 class="card__content__title">${jsonProduit.name}</h2>
          <p class="card__content__price">${formatter.format(jsonProduit.price)}</p>
          <p class="card__content__description">${jsonProduit.description}</p>
          </div>
          <div class="card__add"><button class="card__add__btn">Ajouter au panier</button></div>
      </div>
      </a>`
    }
    let test = document.querySelector('.container__link');
    test.addEventListener('click', function(a){
       
       
    })
    const cardProduct = document.querySelectorAll('.card');
    cardProduct.forEach((product) => {
      product.addEventListener("click",function(b){
        if(b.target.getAttribute('class') === 'card__add__btn'){
          const currentProduct = {
            id : product.dataset.id,
            image : product.querySelector('.card__banner__img').getAttribute('src'),
            name : product.querySelector('.card__content__title').textContent,
            price : product.querySelector('.card__content__price').textContent,
            description : product.querySelector('.card__content__description').textContent,
          }
        addToCart(currentProduct);
        }
      })
    })
  });

  

  
  