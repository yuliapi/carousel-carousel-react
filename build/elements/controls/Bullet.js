'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./bullet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = function (_Component) {
    _inherits(Bullet, _Component);

    function Bullet() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Bullet);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
            var nextSlide = _this.props.index;
            _this.props.handleClick(nextSlide);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Bullet, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                index = _props.index,
                currentActive = _props.currentActive;

            var classToAdd = void 0;
            if (index === currentActive) {
                classToAdd = 'active';
            }

            return _react2.default.createElement(
                'li',
                { className: 'progress-bullet ' + classToAdd },
                _react2.default.createElement('a', { href: '#', 'data-target': index, onClick: this.handleClick })
            );
        }
    }]);

    return Bullet;
}(_react.Component);

exports.default = Bullet;