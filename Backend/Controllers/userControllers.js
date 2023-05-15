const mongoose = require('mongoose');
const user = require('../Models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const allusers = await user.find();

    res.status(200).json({
      status: 'Success',
      message: allusers,
    });
  } catch (err) {
    res.status(200).json({
      status: 'fail',
      message: 'failed to get users',
    });
  }
};


exports.getUser = async (req, res) => {
  try {
    const get_user = await user.findById(req.params.id);

    res.status(200).json({
      status: 'Success',
      message: get_user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'failed to get user',
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const get_user = await user.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true,
    });

    res.status(200).json({
      status: 'Success',
      message: 'Update Successful',
      user: get_user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'Success',
      message: 'User successfully deleted',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
