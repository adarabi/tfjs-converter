"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap) {
    switch (node.op) {
        case 'fill': {
            var shape = utils_1.getParamValue('shape', node, tensorMap);
            var value = utils_1.getParamValue('value', node, tensorMap);
            return [tfc.fill(shape, value)];
        }
        case 'linspace': {
            var start = utils_1.getParamValue('start', node, tensorMap);
            var stop_1 = utils_1.getParamValue('stop', node, tensorMap);
            var num = utils_1.getParamValue('num', node, tensorMap);
            return [tfc.linspace(start, stop_1, num)];
        }
        case 'oneHot': {
            var indices = utils_1.getParamValue('indices', node, tensorMap);
            var depth = utils_1.getParamValue('depth', node, tensorMap);
            var onValue = utils_1.getParamValue('onValue', node, tensorMap);
            var offValue = utils_1.getParamValue('offValue', node, tensorMap);
            return [tfc.oneHot(indices, depth, onValue, offValue)];
        }
        case 'ones': {
            return [tfc.ones(utils_1.getParamValue('shape', node, tensorMap), utils_1.getParamValue('dtype', node, tensorMap))];
        }
        case 'onesLike': {
            return [tfc.onesLike(utils_1.getParamValue('x', node, tensorMap))];
        }
        case 'randomUniform': {
            return [tfc.randomUniform(utils_1.getParamValue('shape', node, tensorMap), utils_1.getParamValue('minval', node, tensorMap), utils_1.getParamValue('maxval', node, tensorMap), utils_1.getParamValue('dtype', node, tensorMap))];
        }
        case 'range': {
            var start = utils_1.getParamValue('start', node, tensorMap);
            var stop_2 = utils_1.getParamValue('stop', node, tensorMap);
            var step = utils_1.getParamValue('step', node, tensorMap);
            return [tfc.range(start, stop_2, step, utils_1.getParamValue('dtype', node, tensorMap))];
        }
        case 'truncatedNormal': {
            var shape = utils_1.getParamValue('shape', node, tensorMap);
            var mean = utils_1.getParamValue('mean', node, tensorMap);
            var stdDev = utils_1.getParamValue('stdDev', node, tensorMap);
            var seed = utils_1.getParamValue('seed', node, tensorMap);
            return [tfc.truncatedNormal(shape, mean, stdDev, utils_1.getParamValue('dtype', node, tensorMap), seed)];
        }
        case 'zeros': {
            return [tfc.zeros(utils_1.getParamValue('shape', node, tensorMap), utils_1.getParamValue('dtype', node, tensorMap))];
        }
        case 'zerosLike': {
            return [tfc.zerosLike(utils_1.getParamValue('x', node, tensorMap))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'creation';
//# sourceMappingURL=creation_executor.js.map