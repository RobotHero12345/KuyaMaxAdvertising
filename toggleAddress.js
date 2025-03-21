function toggleAddressField() {
    const deliveryOption = document.getElementById('delivery').value;
    const addressInput = document.getElementById('address');
    const addressMessage = document.getElementById('address-message');
    const deliveryFeeSection = document.getElementById('delivery-fee');
    const distanceGroup = document.getElementById('distance-group');
    
    if (deliveryOption === 'yes') {
        addressInput.disabled = false;
        addressMessage.style.display = 'inline';
        deliveryFeeSection.style.display = 'block';
        distanceGroup.style.display = 'block';
    } else {
        addressInput.disabled = true;
        addressMessage.style.display = 'none';
        deliveryFeeSection.style.display = 'none';
        distanceGroup.style.display = 'none';
    }
}

function updateDeliveryFee() {
    const deliveryOption = document.getElementById('delivery').value;
    const distance = parseFloat(document.getElementById('delivery-distance').value) || 0;
    const feeAmount = document.getElementById('fee-amount');
    
    let fee = 0;
    
    if (deliveryOption === 'yes' && distance > 0) {
        fee = Math.ceil(distance / 1) * 20;
    }
    
    feeAmount.innerHTML = `<span>&#8369;</span>${fee.toFixed(2)}`;
    updateTotal();
}

function updateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const pricePerItem = 300; 
    
    const totalAmount = document.getElementById('total-amount');
    const deliveryFee = parseFloat(document.getElementById('fee-amount').innerText.replace('₱', '').trim()) || 0;
    
    const total = (pricePerItem * quantity) + deliveryFee;
    totalAmount.innerHTML = `<span>&#8369;</span>${total.toFixed(2)}`;
}