const util = require("util");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const user = require("../Models/userModel");
const { token } = require("morgan");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signUp = async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
  try {
    console.log(req.body);

    const n_user = await user.create(req.body);
    const token = signToken(n_user._id);

    res
      .cookie("jwt", token, {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000),
        httpOnly: true,
      })
      .status(201)
      .json({
        status: "Success",
        message: "New User Registered",
        token,
        data: n_user,
      });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "failed to save users",
      error: err,
    });
  }
};

exports.logIn = async (req, res, next) => {
  try {
    
    const { email, password } = req.body;
    // step 1 check if there's a email and password
    if (!email || !password) {
      res.status(400).json({
        status: "fail",
        message: "Please provide username and password",
      });
    }
    // step 2 check if that  user exists and password is correct
    const e_user = await user.findOne({ email }).select("+password");
    console.log('idhar null hai ' + e_user);

    const correct = await e_user.correctPassword(password, e_user.password);
    // step 3 if everthing is okay send the token to client

    if (!e_user || !correct) {
      res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }
    console.log(e_user._id);
    const token = signToken(e_user._id);
    console.log(new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000))
    res
      .cookie("jwt", token, {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000),
        httpOnly: true,
      })
      .status(201)
      .json({
        status: "Success",
        token,
        data: e_user,
      });
  } catch (err) {
    
    res.status(400).json({
      status: "fail",
      message: "failed to login",
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    let u_token;
    // 1) Checking existance of token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      u_token = req.headers.authorization.split(" ")[1];
    }
    if (!u_token) {
      res.status(401).json({
        status: "Fail",
        message: "You are not logged in",
      });
    }

    // 2) Verification of token
    const decoded = await util.promisify(jwt.verify)(u_token, process.env.JWT_SECRET);

    // 3) Check if user exists
    const user_exists = await user.findById(decoded.id);
    if (!user_exists) {
      res.status(404).json({
        status: "Fail",
        message: "No user found",
      });
    }
    // 4) Check if user changed passwords after jwt was issued // this is optional

    req.user = user_exists;
    next();
  } catch {
    res.status(401).json({
      status: "Fail",
      message: "You are not logged in",
    });
  }
};
