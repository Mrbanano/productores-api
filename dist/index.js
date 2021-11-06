"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

async function main() {
  const port = process.env.PORT || 3000;
  await _app.default.listen(port);
  console.log('Server running on port', port);
}

main();