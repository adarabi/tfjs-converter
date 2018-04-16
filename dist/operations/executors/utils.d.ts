import * as tfc from '@tensorflow/tfjs-core';
import { NamedTensorsMap } from '../../data/index';
import { Node, ValueType } from '../index';
export declare function getParamValue(paramName: string, node: Node, tensorMap: NamedTensorsMap): ValueType;
export declare function getTensor(name: string, tensorMap: NamedTensorsMap): tfc.Tensor;
