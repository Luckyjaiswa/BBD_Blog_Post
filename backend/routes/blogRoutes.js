const express = require("express");
const router = express.Router();
const Blog = require("../model/Blog")

/* for file upload */
const path = require('path');
const multer = require('multer');



/* ---- 1. Multer config right here ---- */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');                             // uploads/ folder (create if not exists)
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + unique);          // images-169...jpg
    }
});

const upload = multer({ storage }).single('images');  // field name = images

router.post("/blog", async (req, res, next) => {
    try {
        upload(req, res, async err => {
            if (err) return res.status(400).json({ msg: 'Image upload error', success: false });
            // console.log(req.body);
            // console.log(req.body.blogtitle);

            const { catename, blogtitle, blogauthor, blogdescription, images } = req.body;
            // console.log(catename + " " + blogtitle);


            if (!blogdescription || !blogdescription.trim()) {
                return res.status(400).json({ msg: 'Description is required', success: false });
            }

            const blog = await Blog.create({
                catename: catename,
                blogtitle: blogtitle,
                blogauthor: blogauthor,
                blogdescription: blogdescription,
                images: req.file ? req.file.filename : ''
            });



            res.status(201).json({ msg: 'Blog published', success: true });

        })

    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }

})

router.get("/blog", async (req, res, next) => {
    try {
        const response = await Blog.find({})
        res.status(201).json({
            success: true,
            record: response
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }

})

router.get("/blog/:c_name", async (req, res, next) => {

    try {
        let c_categoery = req.params.c_name;
        console.log(c_categoery);

        const response = await Blog.find({ "catename": c_categoery })
        // console.log(response);

        res.status(201).json({
            success: true,
            cateresponse: response
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }

})

router.get("/cate-blog/:id", async (req, res, next) => {

    try {
        let id = req.params.id;


        const response = await Blog.find({ "_id": id })
        // console.log(response);

        res.status(201).json({
            success: true,
            cateresponse: response
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Blog not created', success: false });
    }

})
module.exports = router;
