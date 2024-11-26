//se copia tal cual 
const bodyParser = require('body-parser');
const express = require("express")

const cors = require('cors')
const bookRouters = require("./routers/book.routers")
const booksRouters = require("./routers/books.routers")
const errorHandling = require("./error/errorHandling")

const app = express();
 
app.set("port", process.env.PORT || 3001)

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bookRouters);
app.use(booksRouters);
app.use(function(req, res, next)
    {
        res.status(404).json({error:true, 
                              codigo: 404, 
                              message: "Endpoint doesnt found"})
    })

app.use(errorHandling);

module.exports = app;

//si tuvieramos dos end points hay que duplicar fichero de rutas y de controler !!!!!!R3
//Tb cambiar en la app 