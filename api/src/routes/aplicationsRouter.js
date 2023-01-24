const { Router } = require("express");
const getAplications = require("../controllers/aplicationsController");
const createAplication = require("../controllers/aplicationsPostController");
const router = Router();
const { Aplications } = require("../db");

router.get("/", async (req, res) => {
  try {
    const { id } = req.headers;
    const aplications = await Aplications.findAll({
      where: {
        farmId: id,
      },
    });
    res.status(200).send(aplications);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { modalfarm } = req.body;
    const { productos, dosis, cantidad, comentario } = req.body.aplica;
    const postAplication = createAplication(
      productos,
      dosis,
      cantidad,
      comentario,
      modalfarm
    );
    res.status(200).send("Aplication created");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
