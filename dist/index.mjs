// src/index.ts
var Queue = class {
  constructor({
    getNextData,
    process,
    postProcess,
    delay
  }) {
    this.nextDataFunc = async () => {
    };
    this.procDataFunc = async () => {
    };
    this.postProcDataFunc = async () => {
    };
    this.delay = 1e3;
    this.sleepAsDelay = () => new Promise((r) => setTimeout(r, this.delay));
    this.nextDataFunc = getNextData;
    this.procDataFunc = process;
    this.postProcDataFunc = postProcess;
    if (delay)
      this.delay = delay;
  }
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
};
var src_default = { Queue };

export { src_default as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map