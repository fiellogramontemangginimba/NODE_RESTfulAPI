const express = require("express");
const router = express.Router();

//Get collections
router.get("/", (req, res)=>{
    res.send("Response Get all");
});

//GET doc by id
router.get("/:id", (req, res)=>{
    res.send(`Get dic by id: ${req.params.id}`);
});

//POST document
router.post("/", (req, res)=>{
    res.send("Post document");
});

//UPDATE document
router.patch("/:id", (req, res)=>{
    res.send(`Update document by id: ${req.params.id}`);
});


//DELETE document
router.delete("/:id", (req, res)=>{
    res.send(`Delete document by id: ${req.params.id}`);
});

module.exports = router;