(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./src/UFOKit"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./src/UFOKit"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.UFOKit);
    global.ufoKit = mod.exports;
  }
})(this, function (_exports, _UFOKit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _UFOKit = _interopRequireDefault(_UFOKit);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = _UFOKit.default;
  _exports.default = _default;
});
//# sourceMappingURL=ufo-kit.js.map