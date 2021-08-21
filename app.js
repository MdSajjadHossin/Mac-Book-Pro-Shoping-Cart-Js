//handeling memory events
document.getElementById('eight-gb-btn').addEventListener('click', function(){
    const previousMemoryText = document.getElementById('extra-memory');
    previousMemoryText.innerText = 0;

});
document.getElementById('sixteen-gb-btn').addEventListener('click', function(){
    const previousMemoryText = document.getElementById('extra-memory');
    previousMemoryText.innerText = 180;
});

//handle storage events
document.getElementById('256-gb-storage-btn').addEventListener('click', function(){
    const previousStorageText = document.getElementById('extra-storage');
    previousStorageText.innerText = 0;
});
//512 gb stirage
document.getElementById('512-gb-storage-btn').addEventListener('click', function(){
    const previousStorageText = document.getElementById('extra-storage');
    previousStorageText.innerText = 100;
});
//1TB storage
document.getElementById('1TB-gb-storage-btn').addEventListener('click', function(){
    const previousStorageText = document.getElementById('extra-storage');
    previousStorageText.innerText = 180;
});

//handle delivery event
//Aug-25
document.getElementById('aug-25-delivery-btn').addEventListener('click', function(){
    const previousMemoryText = document.getElementById('delivery-cost');
    previousMemoryText.innerText = 0;

});
//Aug-21
document.getElementById('aug-21-delivery-btn').addEventListener('click', function(){
    const previousMemoryText = document.getElementById('delivery-cost');
    previousMemoryText.innerText = 20;
});