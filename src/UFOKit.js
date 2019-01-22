(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "jxon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jxon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jxon);
    global.UFOKit = mod.exports;
  }
})(this, function (_exports, _jxon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _jxon = _interopRequireDefault(_jxon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var UFOKit = function UFOKit() {
    _classCallCheck(this, UFOKit);
  };

  _exports.default = UFOKit;
});
//# sourceMappingURL=UFOKit.js.map