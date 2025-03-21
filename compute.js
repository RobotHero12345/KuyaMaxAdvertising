function updateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const pricePerItem = 200;
    
    const totalAmount = document.getElementById('total-amount');
    const deliveryFee = parseFloat(document.getElementById('fee-amount').innerText.replace('₱', '').trim()) || 0;
    
    const total = (pricePerItem * quantity) + deliveryFee;
    totalAmount.innerHTML = `<span>&#8369;</span>${total.toFixed(2)}`;
}