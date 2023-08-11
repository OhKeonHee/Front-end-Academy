import { IValuable } from "./interface-valuable.ts";

export class Valuable<T> implements IValuable<T> {
  constructor(public value: T) {}
}

export { IValuable };