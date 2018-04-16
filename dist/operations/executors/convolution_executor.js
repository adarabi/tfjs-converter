"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap) {
    switch (node.op) {
        case 'conv1d': {
            var stride = utils_1.getParamValue('stride', node, tensorMap);
            var pad = utils_1.getParamValue('pad', node, tensorMap);
            var dataFormat = utils_1.getParamValue('dataFormat', node, tensorMap)
                .toUpperCase();
            var dilation = utils_1.getParamValue('dilation', node, tensorMap);
            return [tfc.conv1d(utils_1.getParamValue('x', node, tensorMap), utils_1.getParamValue('filter', node, tensorMap), stride, pad, dataFormat, dilation)];
        }
        case 'conv2d': {
            var stride = utils_1.getParamValue('strides', node, tensorMap);
            var pad = utils_1.getParamValue('pad', node, tensorMap);
            var dataFormat = utils_1.getParamValue('dataFormat', node, tensorMap)
                .toUpperCase();
            var dilations = utils_1.getParamValue('dilations', node, tensorMap);
            return [tfc.conv2d(utils_1.getParamValue('x', node, tensorMap), utils_1.getParamValue('filter', node, tensorMap), [stride[1], stride[2]], pad, dataFormat, [dilations[0], dilations[1]])];
        }
        case 'conv2dTranspose': {
            var shape = utils_1.getParamValue('outputShape', node, tensorMap);
            var stride = utils_1.getParamValue('strides', node, tensorMap);
            var pad = utils_1.getParamValue('pad', node, tensorMap);
            return [tfc.conv2dTranspose(utils_1.getParamValue('x', node, tensorMap), utils_1.getParamValue('filter', node, tensorMap), shape, [stride[1], stride[2]], pad)];
        }
        case 'depthwiseConv2d': {
            var stride = utils_1.getParamValue('strides', node, tensorMap);
            var pad = utils_1.getParamValue('pad', node, tensorMap);
            var dilations = utils_1.getParamValue('dilations', node, tensorMap);
            var dataFormat = utils_1.getParamValue('dataFormat', node, tensorMap)
                .toUpperCase();
            return [tfc.depthwiseConv2d(utils_1.getParamValue('input', node, tensorMap), utils_1.getParamValue('filter', node, tensorMap), [stride[1], stride[2]], pad, dataFormat, [dilations[0], dilations[1]])];
        }
        case 'avgPool': {
            var stride = utils_1.getParamValue('strides', node, tensorMap);
            var pad = utils_1.getParamValue('pad', node, tensorMap);
            var kernelSize = utils_1.getParamValue('kernelSize', node, tensorMap);
            return [tfc.avgPool(utils_1.getParamValue('x', node, tensorMap), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
        }
        case 'maxPool': {
            var stride = utils_1.getParamValue('strides', node, tensorMap);
            var pad = utils_1.getParamValue('pad', node, tensorMap);
            var kernelSize = utils_1.getParamValue('kernelSize', node, tensorMap);
            return [tfc.maxPool(utils_1.getParamValue('x', node, tensorMap), [kernelSize[1], kernelSize[2]], [stride[1], stride[2]], pad)];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'convolution';
//# sourceMappingURL=convolution_executor.js.map