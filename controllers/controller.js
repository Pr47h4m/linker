const express = require("express");

const User = require("../models/user");
const { link } = require("../utils/root-dir");

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getSignUp = (req, res, next) => {
  res.render("join");
};

exports.addUser = (req, res, next) => {
  const body = req.body;
  let links = [
    { k: body.title1, v: body.link1 },
    { k: body.title2, v: body.link2 },
    { k: body.title3, v: body.link3 },
    { k: body.title4, v: body.link4 },
    { k: body.title5, v: body.link5 },
  ];
  links = links.filter((link) => link.k !== "");
  const newUser = new User({
    id: body.username,
    imageUrl: body.imageUrl,
    links: links,
    tagline: body.tagline,
  });
  newUser.save().then(() => {
    res.redirect("/@" + body.username)
  }).catch((err) => {
    res.redirect("/join");
  });
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
