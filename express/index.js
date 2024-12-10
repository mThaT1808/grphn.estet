const express = require('express');
const request = require('request');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const formidable = require('express-formidable');

// Create express instance
const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
app.use(cors());
app.use(formidable());
app.use(express.json());

// Require API routes
const test = require('./router/test')
app.get('/api/yandex-maps', (req, res) => {
  const url = 'https://api-maps.yandex.ru/v3/?apikey=cee654eb-7acc-4475-a6ba-b1a8e46b1578&lang=ru_RU';
  request(url)
  .on('response', function(response) {
      res.writeHead(response.statusCode, { 'Content-Type': response.headers['content-type'] });
  })
  .pipe(res) // Передаем поток данных в ответ клиенту
  .on('error', function(err) {
      console.error('Ошибка при запросе:', err);
      res.status(500).send('Ошибка сервера');
  });
});
// Обработка GET-запроса на получение данных из JSON-файла
app.get('/api/offices', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'offices.json');

  // Чтение JSON-файла
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error('Ошибка чтения файла:', err);
          return res.status(500).json({ error: 'Ошибка сервера' });
      }

      const jsonData = JSON.parse(data);
      const items = jsonData.offices;

      // Получаем параметры запроса для пагинации
      const page = parseInt(req.query.page) || 1; // Текущая страница, по умолчанию 1
      const limit = parseInt(req.query.limit) || 10; // Количество элементов на странице, по умолчанию 10

      // Вычисление начального индекса и конечного индекса
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      // Получаем элементы для текущей страницы
      const paginatedItems = items.slice(startIndex, endIndex);

      // Формируем ответ с пагинацией
      const response = {
          totalItems: items.length,
          totalPages: Math.ceil(items.length / limit),
          currentPage: page,
          items: paginatedItems
      };

      // Возвращаем данные в формате JSON
      res.json(response);
  });
});
app.get('/api/offices/all', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'offices.json');

  // Чтение JSON-файла
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error('Ошибка чтения файла:', err);
          return res.status(500).json({ error: 'Ошибка сервера' });
      }
      // Возвращаем данные в формате JSON
      res.json(JSON.parse(data));
  });
});

app.get('/api/doors/all', (req, res) => {
  const collection = req.query.collection;
  const style = req.query.style;
  const colors = req.query.colors;
  const finishing = req.query.finishing;
  const discount = req.query.discount;
  const from = req.query.from;
  const to = req.query.to;
  const priceFrom = req.query['price-from'];
  const priceTo = req.query['price-to'];

  function checkFields (item) {
    let active = true;
    if (discount && item.markClass !== 'promo') {
        active = false;
    }

      if (collection) {
        if (!collection.split(' ').includes(item.collection.toLowerCase())) {
          active = false;
          return;
        }
      }

      if (style) {
        if (!style.split(' ').includes(item.style.toLowerCase())) {
          active = false;
          return;
        }
      }

      if (colors) {;
        if (!item.colors.some((color => colors.split(',').includes(color)))) {
          active = false;
          return;
        }
      }

      if (finishing) {
        if (!finishing.split(' ').includes(item.finishing.toLowerCase())) {
          active = false;
          return;
        }
      }

      if (priceFrom && priceTo) {
        if (parseInt(priceFrom) > parseInt(item.priceNew) || parseInt(priceTo) < parseInt(item.priceNew)) {
          active = false;
          return;
        }
      }

  return active;
}

  const filePath = path.join(__dirname, 'data', 'doors.json');

  // Чтение JSON-файла
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error('Ошибка чтения файла:', err);
          return res.status(500).json({ error: 'Ошибка сервера' });
      }
      // Возвращаем данные в формате JSON
      const filtered = JSON.parse(data).filter((item) => checkFields(item));
      let min = parseInt(filtered[0].priceNew);
      let max = parseInt(filtered[0].priceNew);

      JSON.parse(data).map((item) => {
        if (parseInt(item.priceNew) > max) {
          max = parseInt(item.priceNew);
        }

        if (parseInt(item.priceNew) < min) {
          min = parseInt(item.priceNew);
        }
      });
      const result = filtered.slice(from, to);
      const final = {
        items : result,
        length: filtered.length,
        min: min,
        max: max
      }
      res.json(final);
  });
})
app.get('/api/doors', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'doors.json');

  // Чтение JSON-файла
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error('Ошибка чтения файла:', err);
          return res.status(500).json({ error: 'Ошибка сервера' });
      }

      const jsonData = JSON.parse(data);
      const items = jsonData;

      // Получаем параметры запроса для пагинации
      const from = parseInt(req.query.from) || 0; // Текущая страница, по умолчанию 1
      const to = parseInt(req.query.to) || 8; // Количество элементов на странице, по умолчанию 10

      // Получаем элементы для текущей страницы
      const paginatedItems = items.slice(from, to);

      // Формируем ответ с пагинацией
      const response = {
          totalItems: items.length,
          currentRange: `${from} - ${to}`,
          items: paginatedItems
      };

      // Возвращаем данные в формате JSON
      res.json(response);
  });
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
