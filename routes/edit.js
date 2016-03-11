var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var User = require('../models/user');
var Vision = require('../models/visionBoard');


router.post('/:id', function(req, res) {
    console.log(req.body);
    var newVision = new Vision({
        "current_book": {
            "title": req.body.title,
            "author": req.body.author
        },
        "reading_list": [{
            "title1": req.body.title1,
            "author1": req.body.author1
            },
            {
                "title1": req.body.title2,
                "author1": req.body.author2
            },
            {
                "title1": req.body.title3,
                "author1": req.body.author3
            },
            {
                "title1": req.body.title4,
                "author1": req.body.author4
            },
            {
                "title1": req.body.title5,
                "author1": req.body.author5
            }
        ]
    });
    //console.log(newVision);

    User.findById(req.params.id, function (err, result) {


        //console.log('RESULT', result);

        result.visionboard.push(newVision);

        result.save(function(err, result){
            if(err) {
                console.log(err);
            }
            res.send(result);
            //console.log(result);
        });

    });

});
module.exports = router;