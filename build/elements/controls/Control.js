'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./control.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Control = function (_Component) {
    _inherits(Control, _Component);

    function Control() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Control);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Control.__proto__ || Object.getPrototypeOf(Control)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
            var _this$props = _this.props,
                currentSlide = _this$props.currentSlide,
                direction = _this$props.direction;

            var nextSlide = void 0;
            if (direction === 'next') {
                nextSlide = currentSlide + 1;
            } else {
                nextSlide = currentSlide - 1;
            }
            _this.props.handleClick(nextSlide);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Control, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                currentSlide = _props.currentSlide,
                direction = _props.direction,
                totalSlides = _props.totalSlides,
                controls = _props.controls;


            var disabled = direction === 'previous' && currentSlide === 0 || direction === 'next' && currentSlide === totalSlides - 1;

            return _react2.default.createElement(
                'button',
                { className: 'slide-control control-' + direction, 'data-controls': controls,
                    'data-target': direction, disabled: disabled, onClick: this.handleClick },
                _react2.default.createElement('span', null)
            );
        }
    }]);

    return Control;
}(_react.Component);

exports.default = Control;