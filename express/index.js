const express = require('express');
const request = require('request');
const formidable = require('express-formidable');

// Create express instance
const app = express()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use(formidable());

// Require API routes
const test = require('./router/test')
app.get('/api/yandex-maps', (req, res) => {
  const url = 'https://api-maps.yandex.ru/v3/?apikey=cee654eb-7acc-4475-a6ba-b1a8e46b1578&lang=ru_RU';
  request(url).pipe(res);
});
// Import API Routes
app.use(test)

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 4000
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
