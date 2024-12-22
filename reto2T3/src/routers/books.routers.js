const {Router} = require ("express")
const router = Router();
const booksCtrl = require("../controller/books.controller")



router.get("/libros/:id_book", booksCtrl.getOne); // Cambia a params


router.get("/libros", booksCtrl.getBooks);
        
router.post("/libros", booksCtrl.postBooks);
        
// router.put("/libros/:id", booksCtrl.putBooks);

router.put("/libros/:id_book", booksCtrl.putBooks);
router.delete("/libros/:id_book", booksCtrl.deleteBooks); // Cambia a params



module.exports = router;

