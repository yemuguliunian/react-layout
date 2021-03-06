'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ItemTitle(props) {
    var className = props.className,
        style = props.style,
        weight = props.weight;


    var newStyle = style;
    if ('weight' in props) {
        newStyle = _extends({}, newStyle, {
            fontWeight: weight
        });
    }

    return _react2.default.createElement(
        'div',
        {
            style: newStyle,
            className: className
        },
        props.children
    );
}

ItemTitle.propTypes = {
    weight: _propTypes2.default.number || _propTypes2.default.oneOf(['bold', 'normal'])
};

exports.default = (0, _Container2.default)({ componentClass: 'vtx_cell_itemTitle' })(ItemTitle);
module.exports = exports['default'];