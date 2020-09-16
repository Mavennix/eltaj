"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _customerFeedback = _interopRequireDefault(require("../images/industries/customer-feedback.png"));

var _digitalTransformation = _interopRequireDefault(require("../images/industries/digital-transformation.png"));

var _peopleCart = _interopRequireDefault(require("../images/industries/people-cart.png"));

var _voiceOfCustomer = _interopRequireDefault(require("../images/customer-feedback/voice-of-customer.jpg"));

var _engageCustomer = _interopRequireDefault(require("../images/industries/engage-customer.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TelecomData = [{
  title: '',
  image: _peopleCart["default"],
  subTitle: 'One key to success in the telecommunication industry is to create a consistent customer experience at every touch point in the customer journey - from online to your stores. With ELTAJ’s customer experience solution, including customer feedback, queue management system, Business intelligence - you can create a consistent digital experience for customers when they decide to visit your store.',
  features: []
}, {
  title: 'Streamline customers journey to your stores',
  subTitle: '',
  image: _voiceOfCustomer["default"],
  features: ['Customers can find their preferred service centers online and schedule an appointment before walking into your premises.', 'Customers can reschedule existing appointments online.', 'On arrival, customers check in on the qmatic solo and queue remotely.', 'At the end of the appointment , collect feedback on customer satisfaction.']
}, {
  title: 'Engage customers with the right content while they wait to be served',
  subTitle: '',
  image: _engageCustomer["default"],
  features: ['Inform customers on their real-time queue status.', 'Upsell your product and services by displaying targeted-ads to the right customer segment on a queue', 'Reduce actual and perceived wait time by engaging visitors with valuable content.']
}, {
  title: 'Leverage customer feedback to shape the experience.',
  image: _customerFeedback["default"],
  subTitle: '',
  features: ['Gain full insight about customers, their needs, and trends.', 'Improve experience from customer feedback data', 'Cross-sell other products based on the customers segment.']
}, {
  title: 'Experience the digital transformation today',
  image: _digitalTransformation["default"],
  subTitle: 'With the queue-management solution, you can provide a consistent experience at each touchpoint of the customer journey- and reduce queue time at your branches. Our system integrates seamlessly with other back-end systems and third-party applications to provide an ecosystem of digital service',
  features: []
}];
var _default = TelecomData;
exports["default"] = _default;