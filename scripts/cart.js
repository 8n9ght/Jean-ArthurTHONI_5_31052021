/* Crée un tableau à partir du storage et effectue un push */
function addToCart(product){
    let listProduct = getProdutcts('cart');
    listProduct.push(product);
    saveProducts('cart', listProduct);
}

/* Récupère les éléments du storage en fonction de la clé, retourne un tableau vide si le storage est vide ou convertit listProduit en objet JS si storage pas vide*/
function getProdutcts(key){
    let listProduct = sessionStorage.getItem(key);
    if(listProduct == null){
        sessionStorage.setItem(key, [])
        return[];
    }else{
        return JSON.parse(listProduct);
    }
}

/* Ajoute un objet au format JSON au storage */
function saveProducts(key, product){
    sessionStorage.setItem(key, JSON.stringify(product));
}