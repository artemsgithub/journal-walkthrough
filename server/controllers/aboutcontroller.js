let express = require('express');
let router = express.Router();

router.get('/about', function(req, res){
    res.send('About route')
})

module.exports = router
