"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap, context) {
    switch (node.op) {
        case 'concat': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var inputs = utils_1.getParamValue('tensors', node, tensorMap, context);
            return [tfc.concat(inputs, axis)];
        }
        case 'gather': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var input = utils_1.getParamValue('x', node, tensorMap, context);
            var indices = utils_1.getParamValue('indices', node, tensorMap, context);
            return [tfc.gather(input, indices, axis)];
        }
        case 'reverse': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var input = utils_1.getParamValue('x', node, tensorMap, context);
            return [tfc.reverse(input, axis)];
        }
        case 'slice': {
            var begin = utils_1.getParamValue('begin', node, tensorMap, context);
            var size = utils_1.getParamValue('size', node, tensorMap, context);
            return [tfc.slice(utils_1.getParamValue('x', node, tensorMap, context), begin, size)];
        }
        case 'split': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            var input = utils_1.getParamValue('x', node, tensorMap, context);
            var numOrSizeSplits = utils_1.getParamValue('numOrSizeSplits', node, tensorMap, context);
            return tfc.split(input, numOrSizeSplits, axis);
        }
        case 'stack': {
            var axis = utils_1.getParamValue('axis', node, tensorMap, context);
            return [tfc.stack(utils_1.getParamValue('tensors', node, tensorMap, context), axis)];
        }
        case 'tile': {
            var reps = utils_1.getParamValue('reps', node, tensorMap, context);
            return [tfc.tile(utils_1.getParamValue('x', node, tensorMap, context), reps)];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'slice_join';
//# sourceMappingURL=slice_join_executor.js.map