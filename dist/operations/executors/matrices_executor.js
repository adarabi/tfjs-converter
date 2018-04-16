"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap) {
    switch (node.op) {
        case 'matMul':
            return [tfc.matMul(utils_1.getParamValue('a', node, tensorMap), utils_1.getParamValue('b', node, tensorMap), utils_1.getParamValue('transposeA', node, tensorMap), utils_1.getParamValue('transposeB', node, tensorMap))];
        case 'transpose':
            return [tfc.transpose(utils_1.getParamValue('x', node, tensorMap), utils_1.getParamValue('perm', node, tensorMap))];
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'matrices';
//# sourceMappingURL=matrices_executor.js.map