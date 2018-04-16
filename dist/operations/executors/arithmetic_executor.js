"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap) {
    switch (node.op) {
        case 'add': {
            return [tfc.add(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'mul':
            return [tfc.mul(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        case 'div': {
            return [tfc.div(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'sub': {
            return [tfc.sub(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'minimum': {
            return [tfc.minimum(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'maximum': {
            return [tfc.maximum(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'pow': {
            return [tfc.pow(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'arithmetic';
//# sourceMappingURL=arithmetic_executor.js.map