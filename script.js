const products = [
    { id: 1, name: 'Lipstick', price: 5, image: 'lipstick.jpeg' },
    { id: 2, name: 'Foundation', price: 7, image: 'foundation.jpg' },
    { id: 3, name: 'Mascara', price: 10, image: 'mascara.jpeg' },
    { id: 4, name: 'Eyeliner', price: 5, image: 'eyeliner.jpeg' },
    { id: 5, name: 'Rare Beauty Body care', price: 35, image: 'RareBeauty.jpeg'},
    { id: 6, name: 'Morphe Eye Shadow palette', price: 25, image: 'morphe.jpeg'},
    { id: 7, name: 'Dove facial soap', price: 5, image: 'dove.jpeg'},
    { id: 8, name: 'CT full lip kit', price: 10, image: 'CT.jpeg'},
    { id: 9, name: 'Honey Infused Lip oil', price: 5, image: 'honey.jpeg'},
    { id: 10, name: 'Garnier Charcoal face mask', price: 25, image: 'charcol.jpeg'},
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in the cart.</p>';
        return;
    }

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(itemDiv);
    });
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Proceeding to checkout!');
});

window.onload = displayProducts;