function addToCart(product){
    let listProduct = getProdutcts('cart');
    listProduct.push(product);
    saveProducts('cart', listProduct);
}


function getProdutcts(key){
    let listProduct = sessionStorage.getItem(key);
    if(listProduct == null){
        sessionStorage.setItem(key, [])
        return[];
    }else{
        return JSON.parse(listProduct);
    }
}

function saveProducts(key, product){
    sessionStorage.setItem(key, JSON.stringify(product));
}