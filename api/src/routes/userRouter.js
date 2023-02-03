const { Router } = require("express");
const createUser = require("../controllers/userPostController");
const router = Router();
const { Users } = require("../db");
const bcrypt = require("bcrypt");
const { KJUR } = require("jsrsasign");

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
    let hashedPassword = await bcrypt.hash(nohashedPassword, 8);
    createUser(user.toLowerCase(), hashedPassword.toLowerCase()).then(() =>
      res.sendStatus(200)
    );
  } catch (error) {
    res.status(400);
  }
});

router.get("/login", async (req, res) => {
  try {
    const { data } = req.headers;
    const {
      payloadObj: {
        jti: {
          user: { user, nohashedPassword },
        },
      },
    } = KJUR.jws.JWS.parse(data);
    const userLogin = await Users.findOne({
      where: { user },
    });
    if (userLogin) {
      let comparePwd = await bcrypt.compare(
        nohashedPassword,
        userLogin.hashedPassword.toString()
      );
      if (comparePwd) {
        Users.update({ isActive: true }, { where: { user } });
        res.status(200).send({ msg: "Authorized" });
      } else {
        res.status(500).send({ msg: "Unauthorized" });
      }
    } else {
      res.status(500).send({ msg: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
