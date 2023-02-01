const express = require("express");
const router = express.Router();

router.get("/articles", (req,res)=>{
    res.send("rota categorias")
});

router.get("/admin/articles/new", (req,res)=>{
    res.send("rota para criar uma nova artigo")
});

module.exports = router;