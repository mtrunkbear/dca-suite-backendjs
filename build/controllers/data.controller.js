"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataBySymbol = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _yahooFinance = _interopRequireDefault(require("yahoo-finance2"));

var getDataBySymbol = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var symbol, query, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            symbol = req.params.symbol;
            query = req.query;
            console.log(query, {
              symbol: symbol
            });

            if (!(!query.period1 || !query.period2 || !query.interval || !symbol)) {
              _context.next = 7;
              break;
            }

            console.log("error 400");
            _context.next = 17;
            break;

          case 7:
            _context.prev = 7;
            _context.next = 10;
            return _yahooFinance["default"].historical(symbol, query);

          case 10:
            data = _context.sent;
            return _context.abrupt("return", res.status(200).json(data));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](7);
            console.error("The query have an Error" + Object.values(_context.t0));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 14]]);
  }));

  return function getDataBySymbol(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDataBySymbol = getDataBySymbol;