import { readFilePromise } from "./promise-1.ts";

readFilePromise('./package.json')
  .then((content: string) => {
    console.log(content);
    return readFilePromise("./tsconfig.json");
  })
  .then((content: string) => {
    console.log(content);
    return readFilePromise('.'); // 의도적으로 오류 발생
  })
  .catch((err: Error) => console.log("error: ", err.message))
  .finally(() => console.log('프로그램 종료'))