"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var arithmetic = require("../operations/op_list/arithmetic.json");
var basicMath = require("../operations/op_list/basic_math.json");
var control = require("../operations/op_list/control.json");
var convolution = require("../operations/op_list/convolution.json");
var creation = require("../operations/op_list/creation.json");
var graph = require("../operations/op_list/graph.json");
var image = require("../operations/op_list/image.json");
var logical = require("../operations/op_list/logical.json");
var matrices = require("../operations/op_list/matrices.json");
var normalization = require("../operations/op_list/normalization.json");
var reduction = require("../operations/op_list/reduction.json");
var sliceJoin = require("../operations/op_list/slice_join.json");
var transformation = require("../operations/op_list/transformation.json");
var DOC_DIR = './docs/';
var opMappers = __spread(arithmetic, basicMath, control, convolution, creation, logical, image, graph, matrices, normalization, reduction, sliceJoin, transformation);
var output = [];
output.push('# Supported Tensorflow Ops\n\n');
generateTable('Arithmetic', arithmetic, output);
generateTable('Basic Math', basicMath, output);
generateTable('Control Flow', control, output);
generateTable('Convolution', convolution, output);
generateTable('Tensor Creation', creation, output);
generateTable('Tensorflow Graph', graph, output);
generateTable('Logical', logical, output);
generateTable('Matrices', matrices, output);
generateTable('Normalization', normalization, output);
generateTable('Image', image, output);
generateTable('Reduction', reduction, output);
generateTable('Slice and Join', sliceJoin, output);
generateTable('Transformation', transformation, output);
console.log(process.cwd());
fs.writeFileSync(DOC_DIR + 'supported_ops.md', output.join(''));
console.log("Supported Ops written to " + (DOC_DIR + 'supported_ops.md') + "\n" +
    ("Found " + opMappers.length + " ops\n"));
function generateTable(category, ops, output) {
    output.push("## " + category + " Ops\n\n");
    output.push('|Tensorflow Op Name|Tensorflow.js Op Name|\n');
    output.push('|---|---|\n');
    ops.forEach(function (element) {
        output.push("|" + element.tfOpName + "|" + element.dlOpName + "|\n");
    });
    output.push('\n\n');
}
//# sourceMappingURL=doc_gen.js.map