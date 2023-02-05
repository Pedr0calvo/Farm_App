const { Router } = require("express");
const getFarms = require("../controllers/farmsController");
const createFarm = require("../controllers/farmsPostController");
const { Farms, Users } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { user } = req.headers;
    const user_Id = await Users.findOne({ where: { user } });
    const farms = await Farms.findAll({ where: { userId: user_Id.id } });
    console.log(farms);
    res.status(200).send(farms);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    // const { owner, place, crops } = req.body;
    // console.log(req.body);
    if (!req.body) {
      return res.status(400).json({ message: "Complete info" });
    }
    createFarm(req.body);
    res.status(200).send("Farm created succesfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:idFarm", async (req, res) => {
  try {
    const { idFarm } = req.params;
    const { owner, place } = req.body;
    if (owner) {
      await Farms.update({ owner }, { where: { id: idFarm } });
    }
    if (place) {
      await Farms.update({ place }, { where: { id: idFarm } });
    }
    res.status(200).send("Farm updated succesfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/delete/:idFarm", async (req, res) => {
  try {
    const { idFarm } = req.params;
    await Farms.destroy({ where: { id: idFarm } });
    res.status(200).send("Farm deleted succesfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
