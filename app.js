// const express = require('express');
// const shopify = require('@shopify/shopify-api');

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });


// // const shopifydatum = new Shopify({
// //     shopName: 'eco-pendulum',
// //     apiKey: '8c9e4e7d68911b51fe698d7c3c90ba22',
// //     password: 'gecrud'
// //   });

// //   shopifydatum.customer.list()
// //   .then(customers => console.log(customers))
// //   .catch(err => console.error(err));  

// console.log("awawaw");
// const app = express();


// app.get('/', async (req, res) => {
    
//   // Get the customer data from Shopify.
//     const customer = await shopify.Customer.get(req.query.id);

//   console.log("GET / sample")

//   // Send the customer data back to the client.
//   res.json(customer);
// });

// const port = process.env.PORT || 3000;

// // server.listen(port, () => {
// //     console.log(`Server running on port ${port}`);
// // });

// app.listen(port, () => {
//   console.log('Server listening on port 3000');
// });

const express = require('express');
const Shopify = require('shopify-api-node');

const app = express();

// Set up Shopify instance
const shopify = new Shopify({
  shopName: 'https://eco-pendulum.myshopify.com/',
  apiKey: '8c9e4e7d68911b51fe698d7c3c90ba22',
  password: 'gecrud'
});

app.get('/customers', async (req, res) => {
  try {
    const customers = await shopify.customer.list();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
