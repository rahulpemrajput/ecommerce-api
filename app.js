// app.js
const express = require('express');
const connectDB = require('./Detabase/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRoutes);

// Root route handler
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to the eCommerce platform</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px;
                    background-image: url('https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg');
                    background-size: cover;
                    background-position: center;
                    color: #fff;
                }
                .container {
                    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
                    padding: 20px;
                    border-radius: 10px;
                }
                h1 {
                    font-size: 36px;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 18px;
                }
                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                }
                .btn:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to the eCommerce platform</h1>
                <p>Explore our products and start shopping!</p>
                <a href="/products" class="btn">Explore Products</a>
            </div>
        </body>
        </html>
    `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
