//adding extra cost 
function addExtraCost(item, cost){
    const extraCost = document.getElementById(item + '-cost');
    extraCost.innerText = cost;
}
//extra item cost  
function getExtraPrice(item){
    const  itemPrice = document.getElementById(item + '-cost');
    const itemCostAmount = parseInt(itemPrice.innerText);
    return itemCostAmount;
}

// update total 
function updateTotalPrice (){
    const bestPrice = getExtraPrice('best');
    const memoryPrice = getExtraPrice('memory');
    const storagePrice = getExtraPrice ('storage');
    const deliveryPrice = getExtraPrice ('delivery')
    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-price').innerText = totalPrice;

    const total = document.getElementById('total');
        total.innerText = totalPrice;
}

// handle memory-cost
document.getElementById('memory-extra-cost-btn').addEventListener('click', function(){
    addExtraCost('memory', 180);
    updateTotalPrice();
});

document.getElementById('memory-cost-btn').addEventListener('click', function(){
    addExtraCost('memory', 0);
    updateTotalPrice();
});
//handle storage
//Storage 256gb
document.getElementById('storage-cost-btn-0').addEventListener('click', function(){
    addExtraCost('storage', 0);
    updateTotalPrice();
});
//Storage 512gb
document.getElementById('storage-cost-btn-1').addEventListener('click', function(){
    addExtraCost('storage', 100);
    updateTotalPrice();
});

//Storage 1tb
document.getElementById('storage-cost-btn-2').addEventListener('click', function(){
    addExtraCost('storage', 180);
    updateTotalPrice();
});


// handle delivery-btn
document.getElementById('delivery-cost-btn').addEventListener('click', function(){
    addExtraCost('delivery', 0);
    updateTotalPrice();
});


// handle event listener for delivery-btn
document.getElementById('delivery-extra-cost-btn').addEventListener('click', function(){
    addExtraCost('delivery', 20);
    updateTotalPrice();
});

//  apply promo code for bonus part
document.getElementById('apply-btn').addEventListener('click', function(){
    const bestPrice = getExtraPrice('best');
    const memoryPrice = getExtraPrice('memory');
    const storagePrice = getExtraPrice ('storage');
    const deliveryPrice = getExtraPrice ('delivery')
    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-price').innerText = totalPrice;
    const total = document.getElementById('total');
    const promoCode = document.getElementById('input-promo-code');
    const promoValue = promoCode.value;
    if(promoValue.toLowerCase() == 'stevekaku'){
        const discount = (totalPrice * 20) / 100;
        const afterDiscount = totalPrice - discount;
        total.innerText = afterDiscount;
    }
    else {
        total.innerText = totalPrice;
    }
   promoCode.value = '';
});
