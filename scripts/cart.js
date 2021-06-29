function addToCart(product){
    let listProduct = getProdutcts('cart');
    listProduct.push(product);
    saveProducts('cart', listProduct);
}


function getProdutcts(key){
    let listProduct = localStorage.getItem(key);
    if(listProduct == null){
        localStorage.setItem(key, [])
        return[];
    }else{
        return JSON.parse(listProduct);
    }
}

function saveProducts(key, product){
    localStorage.setItem(key, JSON.stringify(product));
}