import { jsx as _jsx } from "react/jsx-runtime";
import "./myLabel.css";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
export var MyLabel = function (_a) {
  var _b = _a.label,
    label = _b === void 0 ? "No Label" : _b,
    _c = _a.size,
    size = _c === void 0 ? "normal" : _c,
    _d = _a.allCaps,
    allCaps = _d === void 0 ? false : _d,
    _e = _a.color,
    color = _e === void 0 ? "primary" : _e,
    customFontColor = _a.customFontColor,
    cleanCustomColor = _a.cleanCustomColor,
    _f = _a.backgroundColor,
    backgroundColor = _f === void 0 ? "transparent" : _f;
  customFontColor = cleanCustomColor ? "" : customFontColor;
  return _jsx(
    "span",
    __assign(
      {
        className: "label "
          .concat(size, " ")
          .concat(customFontColor !== "" ? "" : "text-".concat(color)),
        style: { color: customFontColor, backgroundColor: backgroundColor },
      },
      { children: allCaps ? label.toUpperCase() : label }
    )
  );
};
