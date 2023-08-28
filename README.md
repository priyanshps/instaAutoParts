# instaAutoParts Documentation [E-Commerce API]

Welcome to the documentation for the instaAutoParts API. This comprehensive guide covers all the features and functionalities provided by the API, including authentication, product management, user management, order handling, invoice generation, and online payment integration.

## Authentication and Authorization

The API employs a robust authentication and authorization system to ensure secure access to resources. Users are required to obtain an API key by registering on our platform. This key must be included in the headers of every request for successful authentication.

### Endpoints

- `POST /api/auth/register`: Register a new user account.
- `POST /api/auth/login`: Log in and receive an access token.

## Product CRUD Management

Effortlessly manage your product inventory using our API's intuitive endpoints. Perform operations like creating, retrieving, updating, and deleting products.

### Endpoints

- `POST /api/product`: Create a new product.
- `GET /api/product/find/:id`: Retrieve product details by ID.
- `PUT /api/product/:id`: Update product details.
- `DELETE /api/product/:id`: Delete a product.
- `DELETE /api/product/all`: Get all products.

User can also add product reviews 
- `POST /api/product/review/:id`: add review.
- `PUT /api/product/review/:id`: update review.
- `GET /api/product/review/:id`: GET review. 


## Product Cart CRUD Management

Efficiently manage the user's shopping cart.

### Endpoints

- `POST /api/cart/`:  Create new product cart.
- `PUT /api/cart/:id`: Update a cart.
- `DELETE /api/cart//cartProduct/delete/:id`: Delete product from cart.
- `DELETE /api/cart/:id`: Delete cart.

## Order Management

Efficiently handle customer orders using our order management endpoints. Keep track of order status, items, and more.

### Endpoints

- `POST /api/order/`: get all order.


## Invoice Creation

Generate invoices automatically based on order information using our invoice creation endpoints.

### Endpoints

- `POST /api/invoice/:id`: Create an invoice for an order.


## Online Payment

Facilitate secure online payments by integrating our API with stripe payment gateways.

### Endpoints

- `POST /api/checkout/payment`: Initialize a payment transaction.

## User Address

User locations management for shipping and logistics  

### Endpoints

- `POST /api/address/create`: Create user location.
- `PUT /api/address//update/:id`: Update user location.
- `DELETE /api/address//delete/:id`: Update user locationn.

---
