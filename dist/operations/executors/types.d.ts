import * as tfc from '@tensorflow/tfjs-core';
import { NamedTensorsMap } from '../../data/index';
import { Node } from '../index';
export interface OpExecutor {
    (node: Node, tensorMap: NamedTensorsMap): tfc.Tensor[];
}
