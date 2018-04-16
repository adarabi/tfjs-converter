import * as tfc from '@tensorflow/tfjs-core';
import { NamedTensorsMap } from '../data/index';
import { Node } from './index';
export declare function executeOp(node: Node, tensorMap: NamedTensorsMap): tfc.Tensor[];
