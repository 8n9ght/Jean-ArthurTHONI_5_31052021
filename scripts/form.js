/* let l_name = document.querySelector('#lastName').value;
let f_name = document.querySelector('#firstName').value;
let mail = document.querySelector('#email').value;
let home = document.querySelector('#city').value;
let cityAddress = document.querySelector('#address').value;

let productOrdered = [];
listProduct.forEach(product => {
    productOrdered.push(product._id);
})

const contact = {
    lastName : l_name,
    firstName : f_name,
    email : mail,
    city : home,
    address : cityAddress
};

const orderData = JSON.stringify({"contact":contact, "productOrdered":productOrdered});

console.log(orderData);

function submitForm(e){
    e.preventDefault();
    fetch("http://localhost:3000/api/cameras", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
            body: JSON.stringify(document.querySelector('.order__modal__form'))
    })
    .then(function(value){
        console.log(value);
    });
}

document.querySelector('.order__modal__form').addEventListener("submit", submitForm); */