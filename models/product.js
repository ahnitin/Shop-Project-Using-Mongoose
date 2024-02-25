const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
module.exports = mongoose.model("Product", productSchema);
// // const mongoConenct = require("../util/database");
// const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;
// class Product {
//   constructor(title, price, imageUrl, description, id, userId) {
//     this.title = title;
//     this.price = price;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId;
//   }
//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       dbOp = db
//         .collection("product")
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       dbOp = db.collection("product").insertOne(this);
//     }
//     return dbOp

//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("product")
//       .find()
//       .toArray()
//       .then((products) => {
//         console.log(products);
//         return products;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   static findById(prodId) {
//     const db = getDb();
//     return db
//       .collection("product")
//       .find({ _id: new mongodb.ObjectId(prodId) })
//       .next()
//       .then((product) => {
//         console.log(product);
//         return product;
//       })
//       .catch((error) => console.log(error));
//   }
//   static deleteById(prodId) {
//     const db = getDb();
//     return db
//       .collection("product")
//       .deleteOne({ _id: new mongodb.ObjectId(prodId) })
//       .then((result) => {
//         console.log("deleted");
//       })
//       .catch((error) => console.log(error));
//   }
// }
// module.exports = Product;