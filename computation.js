function computeTotal() {
    var quantity = document.getElementById('quantity').value;
    var pricePerItem = 1000;
    var totalPrice = quantity * pricePerItem;
    
    document.getElementById('total-price').innerText = totalPrice;
}