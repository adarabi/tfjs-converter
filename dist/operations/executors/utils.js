"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getParamValue(paramName, node, tensorMap) {
    var param = node.params[paramName];
    if (param && param.inputIndex !== undefined) {
        if (param.type === 'tensor') {
            return getTensor(node.inputNames[param.inputIndex], tensorMap);
        }
        if (param.type === 'tensors') {
            var inputs = param.inputIndex === 0 ?
                node.inputNames.slice(param.inputIndex, -param.inputParamLength) :
                node.inputNames.splice(param.inputIndex);
            return inputs.map(function (name) { return getTensor(name, tensorMap); });
        }
        var data = Array.prototype.slice.call(getTensor(node.inputNames.slice(param.inputIndex)[0], tensorMap)
            .dataSync());
        return param.type === 'number' ? data[0] : data;
    }
    return param && param.value;
}
exports.getParamValue = getParamValue;
function getTensor(name, tensorMap) {
    var index = name.lastIndexOf(':');
    if (index === -1) {
        return tensorMap[name] ? tensorMap[name][0] : undefined;
    }
    else {
        var nodeName = name.substring(0, index);
        return tensorMap[nodeName] ?
            tensorMap[nodeName][Number(name.substring(index + 1))] :
            undefined;
    }
}
exports.getTensor = getTensor;
//# sourceMappingURL=utils.js.map