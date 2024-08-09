const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const books = require("./controller/book");

//Route default
app.get('/', (req, res) => {
    res.send('Welcome to My API')
})

//Route for books
app.get("/books", books.getAllBooks);
app.get("/books/:id", books.getBooksById);
app.get("/ejs/books", books.ejsAllBooks);

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`)
});