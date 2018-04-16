"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arithmetic = require("./executors/arithmetic_executor");
var basicMath = require("./executors/basic_math_executor");
var convolution = require("./executors/convolution_executor");
var creation = require("./executors/creation_executor");
var graph = require("./executors/graph_executor");
var image = require("./executors/image_executor");
var logical = require("./executors/logical_executor");
var matrices = require("./executors/matrices_executor");
var normalization = require("./executors/normalization_executor");
var reduction = require("./executors/reduction_executor");
var sliceJoin = require("./executors/slice_join_executor");
var transformation = require("./executors/transformation_executor");
function executeOp(node, tensorMap) {
    switch (node.category) {
        case 'arithmetic':
            return arithmetic.executeOp(node, tensorMap);
        case 'basic_math':
            return basicMath.executeOp(node, tensorMap);
        case 'convolution':
            return convolution.executeOp(node, tensorMap);
        case 'creation':
            return creation.executeOp(node, tensorMap);
        case 'image':
            return image.executeOp(node, tensorMap);
        case 'graph':
            return graph.executeOp(node, tensorMap);
        case 'logical':
            return logical.executeOp(node, tensorMap);
        case 'matrices':
            return matrices.executeOp(node, tensorMap);
        case 'normalization':
            return normalization.executeOp(node, tensorMap);
        case 'reduction':
            return reduction.executeOp(node, tensorMap);
        case 'slice_join':
            return sliceJoin.executeOp(node, tensorMap);
        case 'transformation':
            return transformation.executeOp(node, tensorMap);
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
}
exports.executeOp = executeOp;
//# sourceMappingURL=operation_executor.js.map