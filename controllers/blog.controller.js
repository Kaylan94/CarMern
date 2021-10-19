/* code needed to perform CRUD operations using Mongoose. */
const Blog = require('../models/blog.model.js');
const mongoose = require('mongoose');

//create document in database using create and save
exports.create = function(req, res) {

    // Create and Save a new blog
    let blogModel = new Blog({
        model: Number(req.body.modelValue),
        make: req.body.makeValue,
        color: req.body.colorValue,
        registration: req.body.regValue,
        owner: req.body.ownerValue,
        address: req.body.addrValue
    });
    blogModel.save(function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the blog." });
        } else {
            console.log(data);
            res.send('New vehicle has been added');
        }
    });
};

//find all documents in database and return 
exports.findAll = function(req, res) {
    Blog.find(function(err, blogs) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving blogs." });
        } else {
            res.send(blogs);
        }
    });
}

//update document by registrsation number
exports.updateByReg = function(req, res) {
    let query = { registration: req.body.targetReg };
    let updatedDoc = {
        model: Number(req.body.modelValue),
        make: req.body.makeValue,
        color: req.body.colorValue,
        registration: req.body.regValue,
        owner: req.body.ownerValue,
        address: req.body.addrValue
    }
    
    Blog.findOneAndUpdate(query, updatedDoc, { new: true }, function(err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
            res.send("ERROR: Not Updated. " + err);
        }
        res.send("Blog update successfull");
        console.log(doc);
    });
}

exports.deleteBlogsByReg = function(req, res) {
    let query = { registration: req.body.registration };

    Blog.findOneAndRemove(query, function(err) {
        if (err) {
            console.log("ERROR: Blogs NOT removed. " + err);
            res.send("ERROR: Blogs NOT removed. " + err);
        }
        res.send("Blog removed");
    });
}