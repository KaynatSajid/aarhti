

export function calculateItemsCount(cartItems) {
    return cartItems && cartItems.length ? cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    ) : 0;
}

export function calculateCartTotal(cartItems) {
    
    return cartItems && cartItems.length ? cartItems.reduce(
        (total, item) => total + item.crop.price * item.quantity,
        0
    ) : 0;
}

