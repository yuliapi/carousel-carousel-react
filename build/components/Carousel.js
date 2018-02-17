'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slide = require('../elements/slide/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Control = require('../elements/controls/Control');

var _Control2 = _interopRequireDefault(_Control);

var _Progress = require('../elements/controls/Progress');

var _Progress2 = _interopRequireDefault(_Progress);

require('./carousel.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
    _inherits(Carousel, _Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.changeSlide = function (currentActiveNumber) {
            _this.setState({ currentActive: currentActiveNumber });
        };

        var images = Carousel.prepareImages(_this.props.images);

        _this.state = {
            id: 'myCarousel',
            currentActive: 0,
            images: images,
            total: images.length
        };
        console.log(_this.state.image);
        return _this;
    }

    _createClass(Carousel, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: this.state.id, className: 'carousel' },
                _react2.default.createElement(
                    'div',
                    { className: 'carousel-body' },
                    this.state.images.map(function (image, index) {
                        return _react2.default.createElement(_Slide2.default, { key: index, index: index, title: image.alt,
                            small: image.small,
                            large: image.large,
                            currentSlide: _this2.state.currentActive });
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'carousel-controls' },
                    _react2.default.createElement(_Control2.default, { direction: 'previous', controls: this.state.id,
                        totalSlides: this.state.total, currentSlide: this.state.currentActive,
                        handleClick: this.changeSlide }),
                    _react2.default.createElement(_Control2.default, { direction: 'next', controls: this.state.id,
                        totalSlides: this.state.total, currentSlide: this.state.currentActive,
                        handleClick: this.changeSlide })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'carousel-progress' },
                    _react2.default.createElement(_Progress2.default, { data: this.state, count: this.state.total,
                        handleClick: this.changeSlide })
                )
            );
        }
    }], [{
        key: 'prepareImages',
        value: function prepareImages(images) {
            var names = Object.keys(images);
            var obj = {};
            for (var i = 0; i < names.length; i++) {
                var result = Carousel.extractPrefix(names[i]);
                var prefix = result[1];
                var s = { "alt": prefix };
                s[result[2]] = images[names[i]];

                if (obj.hasOwnProperty(prefix) === true) {
                    var newEntry = Object.assign({}, obj[prefix], s);
                    obj[prefix] = newEntry;
                } else {
                    obj[prefix] = s;
                }
            }

            return Object.values(obj);
        }
    }, {
        key: 'extractPrefix',
        value: function extractPrefix(imageName) {
            return imageName.match(/(.*)-(\w+).(jpg|png|jpeg)$/);
        }
    }]);

    return Carousel;
}(_react.Component);

exports.default = Carousel;