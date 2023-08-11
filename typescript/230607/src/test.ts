// export function makePerson(name: string, age: number) {
//   return {name: name, age: age}
// }

// export function testMakePerson() {
//   console.log(
//     makePerson("Jane", 22),
//     makePerson("Ja", 22)
//   )
// }

export interface IPerson {
  name: string;
  age: number;
}

export interface ICompany {
  name: string;
  age: number;
}


export interface INameable {
  name: string;
}