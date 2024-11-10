let cart = [];
let reviews = {
    1: [], // Reviews for Product 1
    2: []  // Reviews for Product 2
};

function showPage(page) {
    const content = document.getElementById('content');
    switch (page) {
        case 'home':
            content.innerHTML = `
                <header>
                    <h2>Welcome to Our Store</h2>
                </header>
                <section id="product-listings">
                    <h3>Products</h3>
                    <div class="product">
                        <h4>Dates</h4>
                        <p>We are selling dates in such a reasonable price with 30%  off.don't wait just buy it now. </p>
                        <button onclick="addToCart('Dates')">Add to Cart</button>
                    </div>
                    <div class="product">
                        <h4>Egg</h4>
                        <p>Egg is really important thing in our life you can buy egg with 30% off.</p>
                        <button onclick="addToCart('Egg')">Add to Cart</button>
                        <br><br>
                    </div>
                </section>
            `;
            break;

        case 'product-detail':
            content.innerHTML = `
                <section>
                    <h2>Dates</h2>
                    <p>Price: 300</p>
                    <p>Dates are now available in 30% off just buy it.</p>
                    <h3>Reviews</h3>
                    <div id="reviews"></div>
                    <textarea id="review-input" placeholder="Add a review"></textarea>
                    <button onclick="addReview()">Submit Review</button>
                </section>
            `;           
             break;

        case 'auth':
            content.innerHTML = `
                <section>
                    <h2>Register</h2>
                    <form onsubmit="return validateForm()">
                        <input type="text" id="username" placeholder="Username" required>
                        <input type="password" id="password" placeholder="Password" required>
                        <button type="submit">Register</button>
                    </form>
                </section>
            `;
            break;

        case 'payment':
            content.innerHTML = `
                <section>
                    <h2>Checkout</h2>
                    <button onclick="processPayment()">Pay Now</button>
                </section>
            `;
            break;

        default:
            content.innerHTML = `<h2>Page not found</h2>`;
    }
}

function addToCart(productName) {
    cart.push(productName);
    alert(productName + " has been added to the cart!");
    console.log("Cart:", cart);
}

function addReview() {
    const reviewInput = document.getElementById('review-input');
    const reviewText = reviewInput.value;

    if (reviewText) {
        const reviewsDiv = document.getElementById('reviews');
        const newReview = document.createElement('p');
        newReview.textContent = reviewText;
        reviewsDiv.appendChild(newReview);

        reviewInput.value = ''; // Clear the input after submission
    }
}



function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length < 6 || password.length < 6) {
        alert('Username and password must be at least 6 characters long.');
        return false;
    }
    alert('Registration successful!');
    return true;
}

function processPayment() {
    alert('Payment processed successfully! Thank you for your purchase.');
}

// Show the home page by default
showPage('home');
