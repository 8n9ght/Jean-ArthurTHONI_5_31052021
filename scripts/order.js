var formatter = new Intl.NumberFormat('fr-FR', {style: 'currency',
currency: 'EUR', minimumFractionDigits: 0});

let contactName = sessionStorage.getItem('customer');
let orderNumberData = sessionStorage.getItem('orderNumber');
let orderData = JSON.parse(sessionStorage.getItem('cart'));
function displayOrder(){
    for(let data of orderData){
        document.querySelector('.container--order').innerHTML += `<div class="order__infos">Bonjour ${contactName}, votre commande n°${orderNumberData} d'un montant total de ${formatter.format(data.price)} a bien été prise en compte.</div>`;
    }
}

displayOrder();

