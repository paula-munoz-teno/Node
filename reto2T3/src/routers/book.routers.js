const {Router} = require ("express")
const router = Router();
const booksCtrl = require("../controller/book.controller")

// router.get("/", booksCtrl.getStart);

router.get("/libro", booksCtrl.getBook);

// router.get("/libro/:campo/", booksCtrl.getBook2);

// router.get("/libro/:name/", booksCtrl.getBook2);
        
router.post("/libro", booksCtrl.postBook);
        
router.put("/libro", booksCtrl.putBook);
        
router.delete("/libro", booksCtrl.deleteBook); 

module.exports = router;

