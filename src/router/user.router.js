const express = ('express')

let router = express.Router();


router.post('/signup', create)
router.get('/', read)
router.get('/:id',readOne)
router.put('/:u_id', update)
router.delete('/:id',destroy)

module.exports = router
