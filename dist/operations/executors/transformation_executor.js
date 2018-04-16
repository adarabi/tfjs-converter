"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap) {
    switch (node.op) {
        case 'cast': {
            return [tfc.cast(utils_1.getParamValue('x', node, tensorMap), utils_1.getParamValue('dtype', node, tensorMap))];
        }
        case 'expandDims': {
            var axis = node.params['axis'].value;
            return [tfc.expandDims(utils_1.getParamValue('x', node, tensorMap), axis)];
        }
        case 'squeeze': {
            var axis = node.params['axis'].value;
            return [tfc.squeeze(utils_1.getParamValue('x', node, tensorMap), axis)];
        }
        case 'reshape': {
            return [tfc.reshape(utils_1.getParamValue('x', node, tensorMap), utils_1.getParamValue('shape', node, tensorMap))];
        }
        case 'pad': {
            return [tfc.pad(utils_1.getParamValue('x', node, tensorMap), utils_1.getParamValue('padding', node, tensorMap), utils_1.getParamValue('constantValue', node, tensorMap))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'transformation';
//# sourceMappingURL=transformation_executor.js.map