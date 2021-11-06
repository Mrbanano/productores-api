"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _categories = _interopRequireDefault(require("./routes/categories.routes"));

var _product = _interopRequireDefault(require("./routes/product.routes"));

var _register = _interopRequireDefault(require("./routes/register.routes"));

var _roles = _interopRequireDefault(require("./routes/roles.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerOptions = require("./libs/swaggerOptions");

var _options = require("./libs/options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 *Importing Routes
 */

/*
 *Initial setup
 */
const app = (0, _express.default)();

const db = require('./database');
/*
 *Middleware
 */


app.use((0, _morgan.default)('dev'));
app.use((0, _helmet.default)());
app.use((0, _cors.default)());
app.use((0, _express.urlencoded)({
  extended: false
}));
app.use((0, _express.json)());
/*
 * Docs
 */

const specs = (0, _swaggerJsdoc.default)(_swaggerOptions.swaggerOptions);
/*
 *Routing
 */

app.use('/welcome', _index.default);
app.use('/producer/api/v1/Categories', _categories.default);
app.use('/producer/api/v1/Products', _product.default);
app.use('/producer/api/v1/Register', _register.default);
app.use('/producer/api/v1/Roles', _roles.default);
app.use('/producer/api/v1/Users', _user.default);
app.use('/producer/api/v1/Auth', _auth.default);
app.use('/', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(specs, _options.cssOptions));
var _default = app;
exports.default = _default;