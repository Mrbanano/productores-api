"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(async () => {
  try {
    const connection = process.env.NODE_ENV === 'test' ? _config.default.MONGODB_URI_TEST : _config.default.MONGODB_URI;
    const db = await _mongoose.default.connect(connection);
    console.log('Mongodb is connected to', db.connection.host, 'in', db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();