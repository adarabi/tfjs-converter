"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var utils_1 = require("./utils");
exports.executeOp = function (node, tensorMap) {
    switch (node.op) {
        case 'resizeBilinear': {
            var images = utils_1.getParamValue('images', node, tensorMap);
            var size = utils_1.getParamValue('size', node, tensorMap);
            var alignCorners = utils_1.getParamValue('alignCorners', node, tensorMap);
            return [tfc.image.resizeBilinear(images, [size[0], size[1]], alignCorners)];
        }
        default:
            throw TypeError("Node type " + node.op + " is not implemented");
    }
};
exports.CATEGORY = 'image';
//# sourceMappingURL=image_executor.js.map