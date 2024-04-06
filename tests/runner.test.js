import { expect, test } from "vitest";
import { Queue } from "../src/index";

test("main worker", async () => {
  let dummyData = [1, 2, 3];

  console.time("log");

  const runner = new Queue({
    getNextData: async () => {
      const [data] = dummyData;
      return data;
    },
    process: async (data) => {
      console.timeLog("log");
      return true;
    },
    postProcess: async (data) => {
      dummyData = dummyData.filter((filterData) => filterData != data);
      return true;
    },
    delay: 500,
  });

  console.timeEnd("log");

  await runner.start();

  console.log({ dummyData });

  expect(dummyData).toBe([]);
});
