function updateTotal() {
    var quantity = document.getElementById('quantity').value;
    var pricePerItem = 200;
    var totalPrice = quantity * pricePerItem;
    document.getElementById('total-price').innerText = '₱' + totalPrice.toFixed(2);
}