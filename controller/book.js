const Product = require("../model/book");

exports.getAllBooks = (req, res) => {
  const products = Product.getAllBooks();
  res.send(products);
};

exports.getBooksById = (req, res) => {
  const { id } = req.params;
  const product = Product.getBooksId(id);

  if (!product) {
    res.status(404).send(`Product with id ${id} is not found`);
  } else {
    res.status(200).json(product);
  }

};

exports.ejsAllBooks = (req, res) => {
    const books = Product.getAllBooks();
    res.render('allbooks', { books })
};
