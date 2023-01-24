const { Router } = require("express");
const createYield = require("../controllers/yieldPostController");
const router = Router();
const { Yield } = require("../db");

router.get("/", async (req, res) => {
  try {
    const { id } = req.headers;
    const yield = await Yield.findAll({
      where: {
        farmId: id,
      },
    });
    res.status(200).send(yield);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { modalfarm } = req.body;
    const { yield, harvest_quality, comentario } = req.body.harvest;
    const postYield = createYield(
      yield,
      harvest_quality,
      comentario,
      modalfarm
    );
    res.status(200).send("Yield created");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
