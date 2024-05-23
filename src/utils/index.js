
/**
 * This function calculates total price of a new order
 * @param {array} products cartProducts: Array of objects
 * @returns {number} Total price
 */

export function totalPrice(products) {
        let sum = 0
        products.forEach(product => sum += product.price)
        return sum
}