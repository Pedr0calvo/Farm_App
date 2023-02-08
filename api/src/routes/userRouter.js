const { Router } = require("express");
const createUser = require("../controllers/userPostController");
const router = Router();
const { Users } = require("../db");
// const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const { KJUR } = require("jsrsasign");
const logUser = require("../controllers/userController");

router.get("/", async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(400);
  }
});

router.post("/", async (req, res) => {
  try {
    const { payload } = req.body;
    const {
      payloadObj: {
        jti: {
          user: { user, nohashedPassword },
        },
      },
    } = KJUR.jws.JWS.parse(payload);
    let hashedPassword = await bcryptjs.hash(nohashedPassword, 8);
    createUser(user.toLowerCase(), hashedPassword.toLowerCase()).then(() =>
      res.sendStatus(200)
    );
  } catch (error) {
    res.status(400);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { data } = req.headers;
    const {
      payloadObj: {
        jti: {
          user: { user, nohashedPassword },
        },
      },
    } = KJUR.jws.JWS.parse(data);
    await logUser(user.toLowerCase(), nohashedPassword.toLowerCase()).then(
      (r) => console.log(r)
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
