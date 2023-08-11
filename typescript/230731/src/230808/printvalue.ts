import { Valuable, IValuable } from "./valuable.ts";

export const printValue = <T>(o: IValuable<T>): void => console.log(o.value);
export { Valuable, IValuable };