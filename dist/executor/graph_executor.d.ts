import { NamedTensorMap, NamedTensorsMap } from '../data/index';
import * as operations from '../operations/index';
export declare class GraphExecutor {
    private graph;
    private compiledOrder;
    private _weightMap;
    private weightIds;
    private placeholders;
    private outputs;
    weightMap: NamedTensorsMap;
    readonly inputNodes: string[];
    readonly outputNodes: string[];
    constructor(graph: operations.Graph);
    readonly isControlFlowModel: boolean;
    private compile();
    execute(inputs: NamedTensorsMap, outputs?: string | string[]): NamedTensorMap;
    executeAsync(inputs: NamedTensorsMap, outputs?: string | string[]): Promise<NamedTensorMap>;
    private executeWithControlFlow(inputs, context);
    private findOutputs(tensorMap, context, outputs?);
    dispose(): void;
    private checkInput(inputs);
}
