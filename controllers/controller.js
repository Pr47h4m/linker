const express = require("express");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getProfile = (req, res, next) => {
  const username = req.params.username;
  res.render("profile", {
    userData: {
      username: username,
      imageUrl: "/images/default-avatar.png",
      tagline: "I'm a full-stack web / app developer.",
      bgImageUrl: "/images/bg-1.jpg",
    },
  });
};

exports.get404 = (req, res, next) => {
  res.render("404");
};
