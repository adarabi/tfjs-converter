import * as tfc from '@tensorflow/tfjs-core';
import { NamedTensorMap } from '../data/index';
export declare class FrozenModel {
    private modelUrl;
    private weightManifestUrl;
    private requestOption;
    private executor;
    private version;
    private weightManifest;
    private pathPrefix;
    readonly modelVersion: string;
    constructor(modelUrl: string, weightManifestUrl: string, requestOption?: RequestInit);
    private getPathPrefix();
    private loadRemoteProtoFile();
    private loadWeightManifest();
    load(): Promise<boolean>;
    execute(inputs: NamedTensorMap, outputs?: string | string[]): tfc.Tensor | NamedTensorMap;
    executeAsync(inputs: NamedTensorMap, outputs?: string | string[]): Promise<tfc.Tensor | NamedTensorMap>;
    private convertTensorMapToTensorsMap(map);
    dispose(): void;
}
export declare function loadFrozenModel(modelUrl: string, weightsManifestUrl: string, requestOption?: RequestInit): Promise<FrozenModel>;
