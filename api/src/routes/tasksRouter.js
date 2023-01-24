const { Router } = require("express");
const createMonitoring = require("../controllers/tasksPostController");
const createTasks = require("../controllers/tasksPostController");
const router = Router();
const { Monitoring } = require("../db");

router.get("/", async (req, res) => {
  try {
    const { id } = req.headers;
    const allTasks = await Monitoring.findAll({
      where: {
        farmId: id,
      },
    });
    res.status(200).send(allTasks);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { modalfarm } = req.body;
    const { type, note, image } = req.body.text;
    const postMonitoring = createMonitoring(type, note, image, modalfarm);
    res.status(200).send("Monitoring creadted");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
