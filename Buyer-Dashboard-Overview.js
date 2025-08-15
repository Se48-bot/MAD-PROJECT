// Buyer-Dashboard-Overview.js
// External JS for Buyer Dashboard with REST API integration

const API_BASE_URL = 'https://api.example.com'; // Replace with your backend URL

// AUTHENTICATION
async function login(email, password) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
}

async function register(userData) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
}

// PRODUCT DATA
async function fetchProducts() {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
}

// ORDERS
async function createOrder(orderData, token) {
    const response = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
    });
    if (!response.ok) throw new Error('Order creation failed');
    return response.json();
}

async function fetchOrders(token) {
    const response = await fetch(`${API_BASE_URL}/orders`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!response.ok) throw new Error('Failed to fetch orders');
    return response.json();
}

// Example usage: Link these functions to your UI event handlers
// login('user@example.com', 'password').then(data => console.log(data)).catch(err => alert(err.message));
// fetchProducts().then(products => renderProducts(products));
// createOrder(orderData, userToken).then(order => showOrderConfirmation(order));
