const express = require("express");
const Model = require("../Model/memberModel");
const router = express.Router();

// GET all collections
router.get("/", (req, res) => {
  Model.find()
    .then((data) => {
      res.status(200).json({
        status: "succeeded",
        data, // siempre que el nombre de la propiedad
        // y la propiedad se llamen igual
        // si no seria data: data,
        error: null,
      });
    })
    .catch((error) => {
      res.status(404).json({
        status: "not found",
        data,
        error: error.message,
      });
    });
});
// GET doc by id
router.get("/:id", (req, res) => {
  res.send(`Get doc by id: ${req.params.id}`);
});
// POST document
router.post("/", (req, res) => {
  res.send("POST document");
});
// UPDATE document by id
router.patch("/:id", (req, res) => {
  res.send(`UPDATE by id: ${req.params.id}`);
});
// DELETE document by id
router.delete("/:id", (req, res) => {
  res.send(`DELETE by id: ${req.params.id}`);
});

module.exports = router;