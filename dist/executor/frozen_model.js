"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var index_1 = require("../data/index");
var index_2 = require("../operations/index");
var graph_executor_1 = require("./graph_executor");
var FrozenModel = (function () {
    function FrozenModel(modelUrl, weightManifestUrl, requestOption) {
        this.modelUrl = modelUrl;
        this.weightManifestUrl = weightManifestUrl;
        this.requestOption = requestOption;
        this.version = 'n/a';
        this.getPathPrefix();
    }
    Object.defineProperty(FrozenModel.prototype, "modelVersion", {
        get: function () {
            return this.version;
        },
        enumerable: true,
        configurable: true
    });
    FrozenModel.prototype.getPathPrefix = function () {
        var isAbsolute = /^[a-z][a-z0-9+.-]*:/.test(this.weightManifestUrl);
        if (isAbsolute) {
            var url = new URL(this.weightManifestUrl);
            var segments = url.pathname.split('/');
            segments.splice(-1);
            url.pathname = segments.join('/');
            this.pathPrefix = url.toString();
        }
        else {
            var segments = this.weightManifestUrl.split('/');
            segments.splice(-1);
            this.pathPrefix = segments.join('/');
        }
    };
    FrozenModel.prototype.loadRemoteProtoFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        return [4, fetch(this.modelUrl, this.requestOption)];
                    case 1:
                        response = _d.sent();
                        _b = (_a = index_1.tensorflow.GraphDef).decode;
                        _c = Uint8Array.bind;
                        return [4, response.arrayBuffer()];
                    case 2: return [2, _b.apply(_a, [new (_c.apply(Uint8Array, [void 0, _d.sent()]))()])];
                    case 3:
                        error_1 = _d.sent();
                        throw new Error(this.modelUrl + " not found. " + error_1);
                    case 4: return [2];
                }
            });
        });
    };
    FrozenModel.prototype.loadWeightManifest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var manifest, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4, fetch(this.weightManifestUrl, this.requestOption)];
                    case 1:
                        manifest = _b.sent();
                        _a = this;
                        return [4, manifest.clone().json()];
                    case 2:
                        _a.weightManifest = _b.sent();
                        return [3, 4];
                    case 3:
                        error_2 = _b.sent();
                        throw new Error(this.weightManifestUrl + " not found. " + error_2);
                    case 4: return [2];
                }
            });
        });
    };
    FrozenModel.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var graphPromise, manifestPromise, _a, graph, weightMap;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        graphPromise = this.loadRemoteProtoFile();
                        manifestPromise = this.loadWeightManifest();
                        return [4, Promise.all([graphPromise, manifestPromise])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), graph = _a[0];
                        this.version = graph.versions.producer + "." + graph.versions.minConsumer;
                        return [4, tfc.loadWeights(this.weightManifest, this.pathPrefix, undefined, this.requestOption)];
                    case 2:
                        weightMap = _b.sent();
                        this.executor =
                            new graph_executor_1.GraphExecutor(index_2.OperationMapper.Instance.transformGraph(graph));
                        this.executor.weightMap = this.convertTensorMapToTensorsMap(weightMap);
                        return [2, true];
                }
            });
        });
    };
    FrozenModel.prototype.execute = function (inputs, outputs) {
        var result = this.executor.execute(this.convertTensorMapToTensorsMap(inputs), outputs);
        var keys = Object.keys(result);
        return (keys.length === 1) ? result[keys[0]] : result;
    };
    FrozenModel.prototype.convertTensorMapToTensorsMap = function (map) {
        return Object.keys(map).reduce(function (newMap, key) {
            newMap[key] = [map[key]];
            return newMap;
        }, {});
    };
    FrozenModel.prototype.dispose = function () {
        this.executor.dispose();
    };
    return FrozenModel;
}());
exports.FrozenModel = FrozenModel;
function loadFrozenModel(modelUrl, weightsManifestUrl, requestOption) {
    return __awaiter(this, void 0, void 0, function () {
        var model;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = new FrozenModel(modelUrl, weightsManifestUrl, requestOption);
                    return [4, model.load()];
                case 1:
                    _a.sent();
                    return [2, model];
            }
        });
    });
}
exports.loadFrozenModel = loadFrozenModel;
//# sourceMappingURL=frozen_model.js.map