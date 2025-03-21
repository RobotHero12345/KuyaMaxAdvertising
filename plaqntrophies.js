function updatePrice() {
    let productType = document.getElementById('product-type').value;
    let quantity = document.getElementById('quantity').value;
    let pricePerItem = productType === 'plaques' ? 1200 : 1100;

    let totalPrice = pricePerItem * quantity;
    document.getElementById('total-price').innerHTML = `<strong>Total: ₱${totalPrice.toFixed(2)}</strong>`;
}