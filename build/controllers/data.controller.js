"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataBySymbol = void 0;

var _yahooFinance = _interopRequireDefault(require("yahoo-finance2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getDataBySymbol = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var symbol, query, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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