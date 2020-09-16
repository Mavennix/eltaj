"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dashboards = _interopRequireDefault(require("../images/icons/dashboards.svg"));

var _InteractiveReports = _interopRequireDefault(require("../images/icons/Interactive-reports.svg"));

var _analysisReports = _interopRequireDefault(require("../images/icons/analysis-reports.svg"));

var _feedbackReports = _interopRequireDefault(require("../images/icons/feedback-reports.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BusinessDecision = [{
  icon: _dashboards["default"],
  title: 'Dashboards',
  subTitle: 'Customer express themselves about service level wait time and interaction with employee'
}, {
  icon: _InteractiveReports["default"],
  title: 'Interactive Reports',
  subTitle: 'Use online surveys to get customers thoughts on overall service'
}, {
  icon: _analysisReports["default"],
  title: 'Analysis reports',
  subTitle: 'Customers can express their satisfaction when they visit the branch.'
}, {
  icon: _feedbackReports["default"],
  title: 'Feedback Reports',
  subTitle: 'Gather customer feedback data from surveys or and analyze the data'
}];
var _default = BusinessDecision;
exports["default"] = _default;