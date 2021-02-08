const express = require("express");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getProfile = (req, res, next) => {
  const username = req.params.username;
  res.render("profile", { userData: { username: username } });
};

exports.get404 = (req, res, next) => {
  res.render("404");
};
