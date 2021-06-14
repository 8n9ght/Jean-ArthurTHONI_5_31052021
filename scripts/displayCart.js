/* récupération du produit et affichage*/ 

let productInCart = JSON.parse(localStorage.getItem('cart'));

function displayCart(){
    if(productInCart === null){
        document.querySelector('.container--cart').innerHTML += '<p>Votre panier est vide</p>';
    }
        else{
            for(let productToBuy of productInCart){
            document.querySelector('.container--cart').innerHTML += `<div class="card" data-id="${productToBuy.id}">
                    <div class="card__banner"><img src="${productToBuy.image}" class="card__banner__img"></div>
                    <div class="card__content">
                      <h2 class="card__content__title">${productToBuy.name}</h2>
                      <p class="card__content__price">${productToBuy.price}</p>
                      <p class="card__content__description">${productToBuy.description}</p>
                      </div>
                  </div>`
        }
    }
}

displayCart();

/* Vider Panier */
document.querySelector('.container--cart').innerHTML += `<div class="cart__reset"><button class="cart__reset__btn">Vider le panier</button></div>`;

let trash = document.querySelector('.cart__reset__btn');

function emptyCart(){
    localStorage.removeItem('cart');
    window.location.reload(true);
}

trash.addEventListener('click', () => emptyCart());