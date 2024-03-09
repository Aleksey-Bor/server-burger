const express = require("express"); // Импортируем Express.js, фреймворк для создания веб-серверов на Node.js.
const app = express(); // Создаем новый экземпляр Express.js, который мы будем использовать для настройки нашего сервера.
const port = 3000; // Определяем порт, на котором будет работать наш сервер.

const cors = require("cors"); // Импортируем CORS (Cross-Origin Resource Sharing) - промежуточное ПО, которое позволяет нашему серверу обрабатывать запросы с других доменов.
app.use(cors()); // Добавляем промежуточное ПО CORS к нашему серверу. Это позволяет нашему серверу обрабатывать запросы с других доменов.

app.use(express.static("public")); // Добавляем промежуточное ПО для обслуживания статических файлов. Это позволяет нашему серверу обслуживать статические файлы (например, HTML, CSS, JavaScript, изображения и т.д.) из каталога 'public'.

const path = require("path"); // Импортируем встроенный модуль Node.js 'path' для работы с путями файлов и директорий.
app.use(express.json()); // Используем промежуточное ПО express.json() для разбора входящих запросов с JSON-телами. Это позволяет обрабатывать JSON-тела запросов и делает их доступными через req.body.
app.set("view engine", "ejs"); // Устанавливаем EJS в качестве движка представлений для нашего Express-приложения. Это позволяет нам рендерить EJS-шаблоны.
app.set("views", path.join(__dirname, "views")); // Устанавливаем путь к каталогу представлений. __dirname - это путь к текущему исполняемому файлу, а 'views' - это имя каталога, где мы храним наши EJS-шаблоны.

let burgers = [
    {
        "image": "https://florentine-unruly-galliform.glitch.me/burger-images/1.png",
        "title": "Бургер чеддер & бекон",
        "text": "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
        "price": 8,
        "basePrice": 8,
        "grams": 360
    },
    {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/2.png",
      "title": "BBQ с беконом и курицей",
      "text": "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      "price": 7,
      "basePrice": 7,
      "grams": 390
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/3.png",
      "title": "Дабл биф бургер",
      "text": "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
      "price": 10,
      "basePrice": 10,
      "grams": 420
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/4.png",
      "title": "Баварский бургер",
      "text": "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      "price": 8,
      "basePrice": 8,
      "grams": 360
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/5.png",
      "title": "Бекон чизбургер",
      "text": "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      "price": 8,
      "basePrice": 8,
      "grams": 220
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/6.png",
      "title": "Индиана бургер",
      "text": "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      "price": 9,
      "basePrice": 9,
      "grams": 320
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/7.png",
      "title": "Вегги бургер",
      "text": "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      "price": 8,
      "basePrice": 8,
      "grams": 280
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/8.png",
      "title": "Плаксивый Джо",
      "text": "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
      "price": 7,
      "basePrice": 7,
      "grams": 300
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/9.png",
      "title": "Двойной чиз бургер",
      "text": "Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      "price": 11,
      "basePrice": 11,
      "grams": 400
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/10.png",
      "title": "Фрешбургер",
      "text": "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      "price": 9,
      "basePrice": 9,
      "grams": 300
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/11.png",
      "title": "Цуккини бургер",
      "text": "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      "price": 8,
      "basePrice": 8,
      "grams": 320
      },
      {
      "image": "https://florentine-unruly-galliform.glitch.me/burger-images/12.png",
      "title": "Двойной бургер чеддар",
      "text": "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      "price": 9,
      "basePrice": 9,
      "grams": 360
      },      
];

let extraBurgers = [
    {
        "image": "https://florentine-unruly-galliform.glitch.me/burger-images/13.png",
        "title": "Блэк Уайт Лайт",
        "text": "Черная и белая булочка для бургера, говяжья котлета, сыр Пармезан, острый соус",
        "price": 12,
        "basePrice": 12,
        "grams": 290
        },
        {
        "image": "https://florentine-unruly-galliform.glitch.me/burger-images/14.png",
        "title": "Блэк Уайт Бекон",
        "text": "Черная и белая булочка для бургера, говяжья котлета, Бекон, сыр Чеддар, салат айсберг, соус, огурчик",
        "price": 13,
        "basePrice": 13,
        "grams": 310
        },
        {
        "image": "https://florentine-unruly-galliform.glitch.me/burger-images/15.png",
        "title": "Блэк Уайт Макс",
        "text": "Черная и белая булочка для бургера, говяжья котлета, сыр Чеддар, салат айсберг, яйцо, черный соус",
        "price": 16,
        "basePrice": 16,
        "grams": 330
        },
        {
        "image": "https://florentine-unruly-galliform.glitch.me/burger-images/16.png",
        "title": "Блэк Стар Лайт",
        "text": "Черная булочка для бургера, куриная котлета, яйцо,салат айсберг, свежий томат, огурец, соус Блэк",
        "price": 13,
        "basePrice": 13,
        "grams": 290
        },
        {
        "image": "https://florentine-unruly-galliform.glitch.me/burger-images/17.png",
        "title": "Блэк Стар",
        "text": "Черная булочка для бургера, говяжья котлета, сыр Чеддар, салат айсберг, свежий томат, огурец",
        "price": 14,
        "basePrice": 14,
        "grams": 310
        },
        {
        "image": "https://florentine-unruly-galliform.glitch.me/burger-images/18.png",
        "title": "Блэк Стар Макс",
        "text": "Черная булочка для бургера, говяжья котлета, Бекон, Лук, сыр Чеддар, салат айсберг, свежий томат, кетчуп",
        "price": 15,
        "basePrice": 15,
        "grams": 330
        }
];

let orders = [];

// Обработчик GET-запроса
app.get("/burgers-data", (req, res) => {
  let extra = req.query.extra;
  if (extra === "black") {
    let allBurgers = [...burgers, ...extraBurgers];
    res.json(allBurgers);
  } else {
    res.json(burgers);
  }
});

// Обработчик POST-запроса
app.post("/burgers-order", (req, res) => {
  let order = req.body;

  if (order && order.name && order.phone && order.order) {
    orders.push(order);
    res.json({
      success: 1,
      message: "Спасибо за заказ. Мы скоро свяжемся с вами!",
    });
  } else {
    res
      .status(400)
      .json({ success: 0, message: "Ошибка: неполные данные заказа." });
  }
});

app.get("/", (req, res) => {
  res.render("index", {
    orders: orders,
    message1: "Добро пожаловать на сервер IT-School!",
    message2: "В нашу бургерную поступили следующие заказы:",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
