/* récupération du produit et affichage*/ 

let productInCart = JSON.parse(localStorage.getItem('cart'));


function displayCart(){
    if(productInCart === null){
        document.querySelector('.container__cart__products').innerHTML += '<p class="container__cart__products--empty">Votre panier est vide</p>';
    }
        else{
            for(let productToBuy of productInCart){
            document.querySelector('.container__cart__products').innerHTML += 
            `<div class="container__cart__row">
                <div class="row__img">
                    <img class="row__img__item" src="${productToBuy.image}" alt="">
                </div>
                <div class="row__content">
                    <div class="row__content__title">
                        <h2 class="row__content_title__item">${productToBuy.name}</h2>
                    </div>
                    <div class="row__content__id">
                        <p class="row__content__id__item">${productToBuy.id}</p>
                    </div>
                    <div class="row__content__description">
                        <p class="row__content__description__item">${productToBuy.description}</p>
                    </div>
                    <div class="row__content__price">
                        <p class="row__content__price__item">${productToBuy.price}</p>
                    </div>
                </div>
            </div>`;
            let total = 0;
            let totalProducts = 0;
for(var i = 0; i < productToBuy.price.lenght; i++){
    total += productToBuy.price[i];
    console.log(total);
}
for (var j = 0; j < total.length; j++){
    totalProducts += total[j];
    console.log(totalProducts);
}

document.querySelector('.order__total__item').innerHTML = totalProducts + " €";
        }
    }
   
}

displayCart();


/* Total panier */



/* Vider Panier */

document.querySelector('.order__btns').innerHTML += `<div class="cart__reset"><button class="cart__reset__btn">Vider le panier</button></div>
<div class="cart__confirm"><button class="cart__confirm__btn">Confirmer la commande</button></div>`;

let trash = document.querySelector('.cart__reset__btn');

function emptyCart(){
    localStorage.removeItem('cart');
    window.location.reload(true);
}

trash.addEventListener('click', emptyCart);

/* Confirmer la commande */

let order = document.querySelector('.cart__confirm__btn');