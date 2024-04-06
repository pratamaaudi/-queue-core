declare class Queue {
    protected nextDataFunc: () => Promise<any>;
    protected procDataFunc: (data: any) => Promise<any>;
    protected postProcDataFunc: (data: any) => Promise<any>;
    protected delay: number;
    constructor({ getNextData, process, postProcess, delay, }: {
        getNextData: () => Promise<any>;
        process: (data: any) => Promise<any>;
        postProcess: (data: any) => Promise<any>;
        delay: number | null | undefined;
    });
    sleepAsDelay: () => Promise<void>;
    start(): Promise<void>;
}
declare const _default: {
    Queue: typeof Queue;
};

export { _default as default };
