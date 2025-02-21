const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
// const Category = require("./categoryModel");

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    colors: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["sku"],
      },
    ],
  }
);

module.exports = Product;

// {
//     "name": "Sample Product",
//     "description": "This is a sample product.",
//     "price": 19.99,
//     "stock": 100,
//     "sku": "SP1001",
//     "categoryId": 1,
//     "images": ["image1.jpg", "image2.jpg", "image3.jpg"],
//     "colors": [{"name": "Red", "hex": "#FF0000"}, {"name": "Blue", "hex": "#0000FF"}],
//     "tags": ["popular", "new"],
//     "isActive": true
//   }
