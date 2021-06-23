fetch("http://localhost:3000/api/cameras:_5be1ed3f1c9d44000030b061")
.then(data => data.json())
.then(jsonProduit => {
  document.querySelector('.container').innerHTML += 
      `<a href="product.html" class="container__link">
      <div class="card" data-id="${jsonProduit._id}">
        <div class="card__banner"><img src="${jsonProduit.imageUrl}" class="card__banner__img"></div>
        <div class="card__content">
          <h2 class="card__content__title">${jsonProduit.name}</h2>
          <p class="card__content__price">${jsonProduit.price.toLocaleString()}</p>
          <p class="card__content__description">${jsonProduit.description}</p>
          </div>
          <div class="card__add"><button class="card__add__btn">Ajouter au panier</button></div>
      </div>
      </a>`
})