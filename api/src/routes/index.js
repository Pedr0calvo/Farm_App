const { Router, application } = require("express");
const router = Router();
const farmRouter = require("./farmsRouter");
const tasksRouter = require("./tasksRouter");
const aplicationsRouter = require("./aplicationsRouter");
const yieldRouter = require("./yieldRouter");
const userRouter = require("./userRouter");

router.use("/farms", farmRouter);
router.use("/tasks", tasksRouter);
router.use("/aplications", aplicationsRouter);
router.use("/yield", yieldRouter);
router.use("/user", userRouter);

module.exports = router;
