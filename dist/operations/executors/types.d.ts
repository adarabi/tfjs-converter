import * as tfc from '@tensorflow/tfjs-core';
import { NamedTensorsMap } from '../../data/index';
import { ExecutionContext } from '../../executor';
import { Node } from '../index';
export interface OpExecutor {
    (node: Node, tensorMap: NamedTensorsMap, context: ExecutionContext): tfc.Tensor[] | Promise<tfc.Tensor[]>;
}
