const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../utils/constants.utils");
const UserModel = require("../models/userModel");

const AuthController = {
  async register(req, res) {
    const body = req.body;

    const hashedPassword = bcrypt.hashSync(body.password, 10);

    try {
      await UserModel.create({
        ...body,
        password: hashedPassword,
      });
      res.status(201).send({
        message: "User has been created",
      });
    } catch (error) {
      res.status(500).send({
        message: error?.message || "Something went wrong",
        error,
      });
    }
  },

  //login
  async login(req, res) {
    const body = req.body;

    const [user] = await UserModel.find({
      email: body.email,
    });

    if (!user) {
      res.status(404).send({
        message: "User not found.",
      });
    } else {
      const isValidPassword = await bcrypt.compare(
        body.password,
        user.password,
      );

      if (!isValidPassword) {
        res.status(503).send({
          message: "Password is incorrect.",
        });
      } else {
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
            name: user.name,
          },
          JWT_SECRET,
        );

        res.send({
          message: "Success! You're logged in now.",
          token,
        });
      }
    }
  },
  // async profile(req, res) {
  //   try {
  //     const user = await UserModel.findById(req.user.id);
  //     res.send({
  //       message: "User profile fetched successfully",
  //       user,
  //     });
  //   } catch (error) {
  //     res.status(500).send({
  //       message: error?.message || "Something went wrong",
  //       error,
  //     });
  //   }
  // },
};

module.exports = AuthController;
