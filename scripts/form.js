/* Envoie du formulaire au serveur */

function submitForm(){
    let l_name = document.querySelector('#lastName').value;
    let f_name = document.querySelector('#firstName').value;
    let mail = document.querySelector('#email').value;
    let home = document.querySelector('#city').value;
    let cityAddress = document.querySelector('#address').value;
    let productCarted = JSON.parse(sessionStorage.getItem('cart'));
    let productId = productCarted.map(product => product._id);
    const contact = {
        "firstName" : f_name,
        "lastName" : l_name,
        "address" : cityAddress,
        "city" : home,
        "email" : mail
    };
    const orderData = JSON.stringify({"contact":contact, "products":productId});
    
    fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    },
        body: orderData

    })
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        sessionStorage.setItem("orderNumber", data.orderId),
        sessionStorage.setItem("customer", data.contact.firstName),
        window.location = "order-confirm.html"
    })
}

document.querySelector('.order__modal__form').addEventListener("submit", submitForm);

