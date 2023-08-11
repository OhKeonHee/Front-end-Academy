import { printValue, Valuable } from "./printvalue.ts";

printValue(new Valuable<number>(1));
printValue(new Valuable<true>(true));
printValue(new Valuable<string>('hello'));
printValue(new Valuable<number[]>([1, 2, 3]));