"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap) {
    switch (node.op) {
        case 'abs':
            return [tfc.abs(utils_1.getParamValue('x', node, tensorMap))];
        case 'acos':
            return [tfc.acos(utils_1.getParamValue('x', node, tensorMap))];
        case 'asin':
            return [tfc.asin(utils_1.getParamValue('x', node, tensorMap))];
        case 'atan':
            return [tfc.atan(utils_1.getParamValue('x', node, tensorMap))];
        case 'ceil':
            return [tfc.ceil(utils_1.getParamValue('x', node, tensorMap))];
        case 'cos':
            return [tfc.cos(utils_1.getParamValue('x', node, tensorMap))];
        case 'cosh':
            return [tfc.cosh(utils_1.getParamValue('x', node, tensorMap))];
        case 'elu':
            return [tfc.elu(utils_1.getParamValue('x', node, tensorMap))];
        case 'exp':
            return [tfc.exp(utils_1.getParamValue('x', node, tensorMap))];
        case 'floor':
            return [tfc.floor(utils_1.getParamValue('x', node, tensorMap))];
        case 'log':
            return [tfc.log(utils_1.getParamValue('x', node, tensorMap))];
        case 'relu':
            return [tfc.relu(utils_1.getParamValue('x', node, tensorMap))];
        case 'selu':
            return [tfc.selu(utils_1.getParamValue('x', node, tensorMap))];
        case 'sigmoid':
            return [tfc.sigmoid(utils_1.getParamValue('x', node, tensorMap))];
        case 'sin':
            return [tfc.sin(utils_1.getParamValue('x', node, tensorMap))];
        case 'sinh': {
            return [tfc.sinh(utils_1.getParamValue('x', node, tensorMap))];
        }
        case 'sqrt': {
            return [tfc.sqrt(utils_1.getParamValue('x', node, tensorMap))];
        }
        case 'square': {
            return [tfc.square(utils_1.getParamValue('x', node, tensorMap))];
        }
        case 'tanh': {
            return [tfc.tanh(utils_1.getParamValue('x', node, tensorMap))];
        }
        case 'tan':
            return [tfc.tan(utils_1.getParamValue('x', node, tensorMap))];
        case 'clipByValue':
            return [tfc.clipByValue(utils_1.getParamValue('x', node, tensorMap), utils_1.getParamValue('clipValueMin', node, tensorMap), utils_1.getParamValue('clipValueMax', node, tensorMap))];
        case 'rsqrt':
            return [tfc.div(tfc.scalar(1.0, 'float32'), tfc.sqrt(utils_1.getTensor(node.inputNames[0], tensorMap)))];
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'basic_math';
//# sourceMappingURL=basic_math_executor.js.map