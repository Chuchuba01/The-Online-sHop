if (document.readyState == 'loading') {
 document.addElementListner('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var removeCartItemButton = document.getElementByClassName(btn-danger)
    for (var i = 0; i <removeCartItemButton.length; i++){
        var button = removeCartItemButton[i]
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
            
        }

        var removeCartItemButton = document.getElementByClassName(btn-danger)
        for (var i = 0; i <removeCartItemButton.length; i++) {
            var input= quantityUInput[i]
            input.addEventListener('change', quantityChanged)
        }

        

        var addToCartButtons = document-getElememntByClassName('shop-item-button')
        for (var i = 0; i < addToCartButtons.lenght; i++) {
            var button = addToCartButtons[i]
            button,addEventListener('click', addToCartButtons)
        }

        var addToCartButtons = document.getElementByClassName('shop-item-button')
        for (var i = 0; i < addToCartButtons.length; i++) {
            var button = addToCartButtons[i]
            button.addEventListener('click', addToCartClicked)
        }

        document.getElementByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


function updateCartTotal() {
    var cartItemContainer = document.getElementByIdClassName('cart-items')[0]
    var cartrows = cartItemContainer.getElementByClassName('cart-row') 
    var total = 0
    for (var i = 0; i < cartrows.length; i++) {
        var cartRow = cartRows[i]
        var priceelement = cartRow.getElememntByClassName('car-price')[0]
        var quantityElement = cartRow.getElementByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceelement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        //console.log(priceelement, quantityElement)
    }

    total = Math.roung(tatal  * 100) / 100
    document.getElementByClassName('cart-total-price')[0].innerText = '$' + total
}


