const path = require('path');
const productsPath = path.resolve(__dirname, '../data/books.json');
const products = require(productsPath);

class Product {
    static getAllBooks() {
        return products;
    }

    static getBooksId(id) {
        return products.find((el) => el.id === Number(id));
    }
}

module.exports = Product;