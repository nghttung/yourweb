var express = require('express');
var router = express.Router();

// var Zonecontroller = require('../controllers/ZoneController')
var controllers = require('../controllers')

router.get('/:resource', function (req, res, next) {
    var resource = req.params.resource
    var controller = controllers[resource] // resource la zone || comment

    if (controller ==null) {
            res.json({
                confirmation: 'Fail',
                message: 'khong co resource ' + resource  //err
            })
            return
        }
           
        res.json({
            confirmation: controller.find(),
            message: ' co resource ' + resource 
        })
   
})

router.post('/:resource', function (req, res, next) {
    var resource = req.params.resource
     var controller = controllers[resource]
    if (controller == null) {
            res.json({
                confirmation: 'Fail',
                message: 'khong co resource post ' + resource  //err
            })
            return
     }
    
   
  
  
    controller.create(req.body, function (err, result) {
        if (err) {
            res.json({
                confirmation: 'Fail',
                    message: err
            })
            return
        }
        res.json({
            confirmation: 'success',
            result: result
        })
    })
  
})

module.exports = router;