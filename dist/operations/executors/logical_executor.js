"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap) {
    switch (node.op) {
        case 'equal': {
            return [tfc.equal(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'greater': {
            return [tfc.greater(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'greaterEqual': {
            return [tfc.greaterEqual(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'less': {
            return [tfc.less(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'lessEqual': {
            return [tfc.lessEqual(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'logicalAnd': {
            return [tfc.logicalAnd(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'logicalNot': {
            return [tfc.logicalNot(utils_1.getParamValue('a', node, tensorMap))];
        }
        case 'logicalOr': {
            return [tfc.logicalOr(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        case 'where': {
            return [tfc.where(utils_1.getParamValue('condition', node, tensorMap), utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap))];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'logical';
//# sourceMappingURL=logical_executor.js.map