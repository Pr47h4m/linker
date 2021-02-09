const express = require("express");

const User = require("../models/user");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getSignUp = (req, res, next) => {
  res.render("join");
};

exports.getAboutUs = (req, res, next) => {
  res.render("about-us");
};

exports.getContactUs = (req, res, next) => {
  res.render("contact-us");
};

exports.getProfile = (req, res, next) => {
  const username = req.params.username;
  User.fetch(username)
    .then(([result]) => {
      if (!!result[0]) {
        console.log(JSON.parse(result[0].links));
        res.render("profile", {
          userData: {
            username: username,
            imageUrl: result[0].imageUrl,
            tagline: result[0].tagline,
            bgImageUrl: "/images/bg-6.jpg",
            links: JSON.parse(result[0].links),
          },
        });
      } else res.redirect("/404");
    })
    .catch((err) => console.error(err));
};

exports.get404 = (req, res, next) => {
  res.render("404");
};
