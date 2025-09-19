const userModel = require("../model/signupModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function singupUser(req, res) {
  const { first_name, last_name, username, email, password } = req.body;
  const hsahedPass = await bcrypt.hash(password, 10);
  if (!req.body || !username || !email || !password) {
    return res
      .status(400)
      .json({ status: "Bad Request", message: "Inavild user data !!!" });
  }
  const existingEmail = await userModel.findOne({
    email: req.body.email,
  });
  if (existingUser) {
    return res
      .status(409)
      .json({ status: "Conflict", message: "Email already exists !!!" });
  }
  const existingUsernamme = await userModel.findOne({
    password: req.body.username,
  });
  if (existingUsernamme) {
    return res
      .status(409)
      .json({ status: "Conflict", message: "Username already exists !!!" });
  }

  const result = await userModel.create({
    first_name: first_name,
    last_name: last_name,
    username: username,
    email: email,
    password: hsahedPass,
  });
  res.status(201).json({
    status: "Created",
    meassage: "User created successfully !!!",
  });
}

async function loginUser(req, res) {
  const { username, password } = req.body;
  const user = await userModel.findOne({
    username: username,
  });
  if (!user)
    return res
      .status(400)
      .json({ status: "Bad Request", meassage: "User not found !!!" });

  const validatePassword = await bcrypt.compare(password, user.password);
  if (!validatePassword)
    return res
      .status(400)
      .json({ status: "Bad Request", meassage: "Invalid Password !!!" });

  const token = jwt.sign({ id: user.id }, "hjs83hj32dss", {
    expiresIn: "3h",
  });
  res.status(201).json({
    token,
    status: "Success",
    message: "User loggedin successfully !!!",
  });
}

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res
      .status(403)
      .json({ status: "Forbidden", message: "Token is missing !!!" });

  jwt.verify(token, "hjs83hj32dss", (err, user) => {
    if (err) return res.status(403).send("Invalid token !!!");
    console.log(user);
    req.user = user;
    next();
  });
};
module.exports = {
  singupUser,
  loginUser,
  authenticateToken,
};
