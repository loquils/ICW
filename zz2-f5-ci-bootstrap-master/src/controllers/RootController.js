import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

/*Petit rappel que je viens de comprendre : 
router.get ca va etre la premiere page que ca va load
router.post c'est pour les page dapres*/

router.post("/", (req, res) => {
  res.render("pizz", { pizzas: [{ name: "test", price: 1 } , { name: "test2", price: 2 } , { name: "test3", price: 3 } , { name: "test4", price: 4 } , { name: "test5", price: 5 }] });
});

router.post("/login", (req, res) => {
  const { firstname, lastname } = req.body;
  res.render("pizz", {pizzas:[], firstname, lastname });
});

export default router;
