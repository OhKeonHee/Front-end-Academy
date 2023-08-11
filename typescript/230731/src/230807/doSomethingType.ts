import { ResultType } from "./ResultType.ts";

export const doSomething = (): ResultType => {
  try {
    throw new Error("Some error occurs...");
  } catch(e) {
    return [false, e.message]; // ResultType.ts에서 튜플타입으로 정의함 (boolean, string)
  }
}