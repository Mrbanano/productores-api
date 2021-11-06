"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const router = (0, _express.Router)();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.json({
    message: 'Ok'
  });
});
var _default = router;
exports.default = _default;