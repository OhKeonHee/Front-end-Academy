import { doSomething } from "./doSomethingType.ts";

const [result, errorMessage] = doSomething();

console.log(result, errorMessage); // -> false Some error occurs...