const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const UserDataBase = require('../mongoDB/user-schema');

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  UserDataBase.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new UserDataBase({
        name,
        email,
        password,
        wineList: [],
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.error(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  UserDataBase.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
          wineList: user.wineList,
          columns: user.columns || null,
          shelves: user.shelves || null,
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.post('/addStorage', async (req, res) => {
  try {
    const { email, columns, shelves } = req.body;
    const user = await UserDataBase.findOne({ email });
    await user.updateOne({ columns, shelves });
    const payload = {
      ...user._doc,
      columns,
      shelves,
    }
    jwt.sign(
      payload,
      keys.secretOrKey,
      {
        expiresIn: 31556926, // 1 year in seconds
      },
      (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token,
        });
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/addWine', async (req, res) => {
  try {
    const { email, _id } = req.body;
    const user = await UserDataBase.findOne({ email });
    const wineList = await user.wineList;
    if (wineList.some(wine => wine === _id)) return res.status(200).send();

    wineList.push(_id);
    await user.updateOne({ wineList });
    const payload = {
      ...user._doc,
      wineList
    }
    jwt.sign(
      payload,
      keys.secretOrKey,
      {
        expiresIn: 31556926, // 1 year in seconds
      },
      (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token,
        });
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/deleteWine', async (req, res) => {
  try {
    const { _id, email } = req.body;
    const user = await UserDataBase.findOne({ email });
    const wineList = await user.wineList;
    const newList = wineList.filter(wine => wine !== _id);
    await user.updateOne({ wineList: newList });
    const payload = {
      ...user._doc,
      wineList: newList,
    }
    jwt.sign(
      payload,
      keys.secretOrKey,
      {
        expiresIn: 31556926, // 1 year in seconds
      },
      (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token,
        });
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;