/* Fomatage des prix du panier */
var formatter = new Intl.NumberFormat('fr-FR', {style: 'currency',
currency: 'EUR', minimumFractionDigits: 0});

/* Gestion du panier */ 
let productInCart = JSON.parse(sessionStorage.getItem('cart'));

function displayCart(){
    /* Affiche un lien de redirection vers la page d'accueeil si le panier est vide */
    if(productInCart === null){
        document.querySelector('.container__cart__products').innerHTML += '<p class="container__cart__products--empty">Votre panier est vide <br> <a href="index.html" class="container__cart__products__link">Découvrez nos produits ou continuez vos achats ici</a></p>';
    }
    /* Crée et affiche la structure du panier si celui ci n'est pas vide */
        else{
            document.querySelector('.container__cart').innerHTML += `<div class="container__cart__order">
            <div class="order__title">
                <h3 class="order__title__item">Total</h3>
            </div>

            <div class="order__total">
                <p class="order__total__item"></p>
            </div>

                <div class="order__btns"></div>
            </div>`;
            document.querySelector('.order__btns').innerHTML += `<div class="cart__reset"><button class="cart__reset__btn">Vider le panier</button></div>
            <div class="cart__confirm"><button class="cart__confirm__btn">Commander</button></div>`;

            /* Vide le panier */
            let trash = document.querySelector('.cart__reset__btn');

            function emptyCart(){
                sessionStorage.removeItem('cart');
                window.location.reload();
            }

            trash.addEventListener('click', emptyCart);

            /* Affiche les produits ajoutés au panier */
            for(let productToBuy of productInCart){
                document.querySelector('.container__cart__products').innerHTML += 
                `<a href="product.html?id=${productToBuy._id}" class="container__cart__link">
                <div class="container__cart__row">
                    <div class="row__img">
                        <img class="row__img__item" src="${productToBuy.imageUrl}" alt="">
                    </div>
                    <div class="row__content">
                        <div class="row__content__title">
                            <h2 class="row__content_title__item">${productToBuy.name}</h2>
                        </div>
                        <div class="row__content__id">
                            <p class="row__content__id__item">${productToBuy._id}</p>
                        </div>
                        <div class="row__content__description">
                            <p class="row__content__description__item">${productToBuy.description}</p>
                        </div>
                        <div class="row__content__price">
                            <p class="row__content__price__item">${formatter.format(productToBuy.price)}</p>
                        </div>
                    </div>
                </div>
                </a>`;

                /* Calcul la somme des produits dans le panier */
                let total = 0;
                    for(var i = 0; i < productInCart.length; i++){
                        total += parseInt(productInCart[i].price);
                }

                document.querySelector('.order__total__item').innerHTML = formatter.format(total);
            }
        }
   
}

displayCart();


/* Ouvre le formulaire de confirmation de commande */
function openModal(){
    document.querySelector('.cart__confirm').addEventListener("click", function(){
        document.querySelector('.order__modal__background').classList.remove('kill');
    });
}
openModal();

/* Ferme le formulaire de confirmation de commande */
document.querySelector('.order__modal__close').addEventListener('click', function(){
    document.querySelector('.order__modal__background').classList.add('kill');
})