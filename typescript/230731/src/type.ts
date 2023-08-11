import INameable from "./object";

let obj:object = { name: 'Jack' };

// 타입변환: 객체의 타입을 변환시켜서 값을 가져오는 방법
let name1 = (<INameable>obj).name;

// 타입단언: 타입 단언의 방식으로 값을 가져오는 방법
let name2 = (obj as INameable).name;