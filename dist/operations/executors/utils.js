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
Object.defineProperty(exports, "__esModule", { value: true });
function getParamValue(paramName, node, tensorMap, context) {
    var param = node.params[paramName];
    if (param && param.inputIndex !== undefined) {
        if (param.type === 'tensor') {
            return getTensor(node.inputNames[param.inputIndex], tensorMap, context);
        }
        if (param.type === 'tensors') {
            var inputs = param.inputIndex === 0 ?
                node.inputNames.slice(param.inputIndex, -param.inputParamLength) :
                node.inputNames.splice(param.inputIndex);
            return inputs.map(function (name) { return getTensor(name, tensorMap, context); });
        }
        var data = Array.prototype.slice.call(getTensor(node.inputNames.slice(param.inputIndex)[0], tensorMap, context)
            .dataSync());
        return param.type === 'number' ? data[0] : data;
    }
    return param && param.value;
}
exports.getParamValue = getParamValue;
function getTensor(name, tensorsMap, context) {
    var _a = __read(parseNodeName(name), 2), nodeName = _a[0], index = _a[1];
    var contextId = context.currentContextIds.find(function (contextId) {
        return !!tensorsMap[getNodeNameWithContextId(nodeName, contextId)];
    });
    return contextId !== undefined ?
        tensorsMap[getNodeNameWithContextId(nodeName, contextId)][index] :
        undefined;
}
exports.getTensor = getTensor;
function getNodeNameAndIndex(inputName, context) {
    var _a = __read(parseNodeName(inputName), 2), nodeName = _a[0], index = _a[1];
    return [
        getNodeNameWithContextId(nodeName, context && context.currentContextId),
        index
    ];
}
exports.getNodeNameAndIndex = getNodeNameAndIndex;
function getNodeNameWithContextId(name, contextId) {
    return !!contextId ? name + "-" + contextId : name;
}
function parseNodeName(name) {
    var index = name.lastIndexOf(':');
    if (index === -1)
        return [name, 0];
    var nodeName = name.substring(0, index);
    return [nodeName, Number(name.substring(index + 1))];
}
exports.parseNodeName = parseNodeName;
function split(arr, size) {
    var res = [];
    for (var i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}
exports.split = split;
//# sourceMappingURL=utils.js.map