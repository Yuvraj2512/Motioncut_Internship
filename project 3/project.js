function showPic(src) {
    var bigPic = document.querySelector('.big-pic img');
    bigPic.src = src;
}
var addToCartButton = document.querySelector('.cart-btn');
addToCartButton.addEventListener('click', function(){
    alert('Item added to cart!')
});