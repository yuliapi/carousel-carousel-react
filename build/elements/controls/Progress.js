'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

var _Bullet = require('./Bullet');

var _Bullet2 = _interopRequireDefault(_Bullet);

require('./progress.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = function (_Component) {
    _inherits(Progress, _Component);

    function Progress() {
        _classCallCheck(this, Progress);

        return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
    }

    _createClass(Progress, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                count = _props.count,
                data = _props.data;

            var allBullets = Array.from(Array(count).keys());
            return _react2.default.createElement(
                'div',
                { className: 'progress-wrapper' },
                _react2.default.createElement(_Control2.default, { direction: 'previous', controls: data.id,
                    totalSlides: data.total, currentSlide: data.currentActive,
                    handleClick: function handleClick(nexSlide) {
                        return _this2.props.handleClick(nexSlide);
                    } }),
                _react2.default.createElement(
                    'ul',
                    null,
                    allBullets.map(function (number, index) {
                        return _react2.default.createElement(_Bullet2.default, { key: index, index: number,
                            currentActive: data.currentActive,
                            handleClick: _this2.props.handleClick });
                    })
                ),
                _react2.default.createElement(_Control2.default, { direction: 'next', controls: data.id,
                    totalSlides: data.total, currentSlide: data.currentActive,
                    handleClick: this.props.handleClick })
            );
        }
    }]);

    return Progress;
}(_react.Component);

exports.default = Progress;