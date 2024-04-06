class Queue {
  protected nextDataFunc: () => Promise<any> = async () => {};
  protected procDataFunc: (data: any) => Promise<any> = async () => {};
  protected postProcDataFunc: (data: any) => Promise<any> = async () => {};
  protected delay: number = 1000;

  public constructor({
    getNextData,
    process,
    postProcess,
    delay,
  }: {
    getNextData: () => Promise<any>;
    process: (data: any) => Promise<any>;
    postProcess: (data: any) => Promise<any>;
    delay: number | null | undefined;
  }) {
    this.nextDataFunc = getNextData;
    this.procDataFunc = process;
    this.postProcDataFunc = postProcess;

    if (delay) this.delay = delay;
  }

  sleepAsDelay: () => Promise<void> = () =>
    new Promise((r) => setTimeout(r, this.delay));

  async start() {
    while (true) {
      const data = await this.nextDataFunc();

      if (data) {
        await this.procDataFunc(data);

        await this.postProcDataFunc(data);

        await this.sleepAsDelay();

        continue;
      }

      break;
    }
  }
}

export { Queue };
