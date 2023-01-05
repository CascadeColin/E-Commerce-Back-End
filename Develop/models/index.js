// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// products to categories is one-to-many.  product has one category, categories have many products

// Products belongsTo Category
Product.belongsTo(Category);

// Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// TODO: one-to-many relationship
// Products belongToMany Tags (through ProductTag)

// one-to-many relationships
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
