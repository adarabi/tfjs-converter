"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap) {
    switch (node.op) {
        case 'concat': {
            var axis = utils_1.getParamValue('axis', node, tensorMap);
            var inputs = utils_1.getParamValue('tensors', node, tensorMap);
            return [tfc.concat(inputs, axis)];
        }
        case 'gather': {
            var axis = utils_1.getParamValue('axis', node, tensorMap);
            var input = utils_1.getParamValue('x', node, tensorMap);
            var indices = utils_1.getParamValue('indices', node, tensorMap);
            return [tfc.gather(input, indices, axis)];
        }
        case 'reverse': {
            var axis = utils_1.getParamValue('axis', node, tensorMap);
            var input = utils_1.getParamValue('x', node, tensorMap);
            return [tfc.reverse(input, axis)];
        }
        case 'slice': {
            var begin = utils_1.getParamValue('begin', node, tensorMap);
            var size = utils_1.getParamValue('size', node, tensorMap);
            return [tfc.slice(utils_1.getParamValue('x', node, tensorMap), begin, size)];
        }
        case 'stack': {
            var axis = utils_1.getParamValue('axis', node, tensorMap);
            return [tfc.stack(utils_1.getParamValue('tensors', node, tensorMap), axis)];
        }
        case 'tile': {
            var reps = utils_1.getParamValue('reps', node, tensorMap);
            return [tfc.tile(utils_1.getParamValue('x', node, tensorMap), reps)];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'slice_join';
//# sourceMappingURL=slice_join_executor.js.map