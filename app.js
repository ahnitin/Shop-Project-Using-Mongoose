const path = require("path");
const Mogoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const Product = require("./models/product");
const User = require("./models/user");
// const Cart = require('./models/cart');
// const CartItem = require('./models/cart-item');
// const Order = require('./models/order');
// const OrderItem = require('./models/order-item');
// const mongoConenct = require("./util/database").mongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  User.findById("65db296f96bfd06ba8e85976")
    .then((user) => {
      console.log(user);
      req.user = user;
      next();
    })
    .catch((error) => {
      console.log(error);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);
Mogoose.connect(
  "mongodb+srv://nitinahuja240:good1234@shop.i4igw4d.mongodb.net/"
)
  .then(() => {
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Nitin",
          email: "nitinahuja240@gmail.com",
          cart: { items: [] },
        });
        user.save();
      }
    });
    app.listen(3000);
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(error);
  });
