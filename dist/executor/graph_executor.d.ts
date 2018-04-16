import { NamedTensorMap, NamedTensorsMap } from '../data/index';
import * as operations from '../operations/index';
export declare class GraphExecutor {
    private graph;
    private compiledOrder;
    private _weightMap;
    private placeholders;
    private outputs;
    weightMap: NamedTensorsMap;
    readonly inputNodes: string[];
    readonly outputNodes: string[];
    constructor(graph: operations.Graph);
    private compile();
    execute(inputs: NamedTensorsMap, outputs?: string | string[]): NamedTensorMap;
    dispose(): void;
    private checkInput(inputs);
}
