import * as tfc from '@tensorflow/tfjs-core';
import { NamedTensorsMap } from '../data/index';
import { ExecutionContext } from '../executor/execution_context';
import { Node } from './index';
export declare function executeOp(node: Node, tensorMap: NamedTensorsMap, context: ExecutionContext): tfc.Tensor[] | Promise<tfc.Tensor[]>;
