"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var tfjs_core_1 = require("@tensorflow/tfjs-core");
var utils_1 = require("../operations/executors/utils");
var operations = require("../operations/index");
var GraphExecutor = (function () {
    function GraphExecutor(graph) {
        this.graph = graph;
        this.compiledOrder = [];
        this._weightMap = {};
        this.placeholders = graph.placeholders.map(function (node) { return node.name; });
        this.outputs = graph.outputs.map(function (node) { return node.name; });
        this.compile();
    }
    Object.defineProperty(GraphExecutor.prototype, "weightMap", {
        get: function () {
            return this._weightMap;
        },
        set: function (weightMap) {
            this._weightMap = weightMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphExecutor.prototype, "inputNodes", {
        get: function () {
            return this.placeholders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphExecutor.prototype, "outputNodes", {
        get: function () {
            return this.outputs;
        },
        enumerable: true,
        configurable: true
    });
    GraphExecutor.prototype.compile = function () {
        var stack = __spread(this.graph.inputs);
        var visited = {};
        while (stack.length > 0) {
            var node = stack.pop();
            visited[node.name] = true;
            this.compiledOrder.push(node);
            node.children.forEach(function (childNode) {
                if (childNode.inputNames.every(function (name) { return visited[name]; })) {
                    stack.push(childNode);
                }
            });
        }
    };
    GraphExecutor.prototype.execute = function (inputs, outputs) {
        var _this = this;
        this.checkInput(inputs);
        var result = tfjs_core_1.tidy(function () {
            var tensors = _this.compiledOrder.reduce(function (map, node) {
                map[node.name] = operations.executeOp(node, map);
                return map;
            }, __assign({}, _this.weightMap, inputs));
            if (outputs && !(outputs instanceof Array)) {
                outputs = [outputs];
            }
            var requestedOutputs = (outputs || _this.graph.outputs.map(function (node) { return node.name; }));
            return requestedOutputs.reduce(function (map, name) {
                map[name] = utils_1.getTensor(name, tensors);
                return map;
            }, {});
        });
        return result;
    };
    GraphExecutor.prototype.dispose = function () {
        var _this = this;
        Object.keys(this.weightMap)
            .forEach(function (key) { return _this.weightMap[key].forEach(function (tensor) { return tensor.dispose(); }); });
    };
    GraphExecutor.prototype.checkInput = function (inputs) {
        var _this = this;
        var inputKeys = Object.keys(inputs);
        var missing = [];
        var extra = [];
        this.placeholders.forEach(function (name) {
            if (inputKeys.indexOf(name) === -1)
                missing.push(name);
        });
        inputKeys.forEach(function (name) {
            if (_this.placeholders.indexOf(name) === -1)
                extra.push(name);
        });
        if (missing.length > 0) {
            throw new Error("Missing input placeholders: " + missing);
        }
        if (extra.length > 0) {
            throw new Error("Extra input tensors: " + extra);
        }
    };
    return GraphExecutor;
}());
exports.GraphExecutor = GraphExecutor;
//# sourceMappingURL=graph_executor.js.map