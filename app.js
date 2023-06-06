
const express = require('express');
const shopify = require('@shopify/shopify-api');
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});


const shopify = new Shopify({
    shopName: 'eco-pendulum',
    apiKey: '8c9e4e7d68911b51fe698d7c3c90ba22',
    password: 'gecrud'
  });


  shopify.customer.list()
  .then(customers => console.log(customers))
  .catch(err => console.error(err));  

console.log("awawaw");
const app = express();


app.get('/', async (req, res) => {
  // Get the customer data from Shopify.
  const customer = await shopify.Customer.get(req.query.id);

  // Send the customer data back to the client.
  res.json(customer);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});





// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

