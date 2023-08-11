import { read, readFile } from "fs";

readFile('./package.json', (err: unknown, buffer: Buffer): void => {
  if(err) throw err
  else {
    const content: string = buffer.toString();
    console.log(content);

    readFile('./tsconfig.json', (err: unknown, buffer: Buffer): void => {
      if(err) throw err
      else {
        const content: string = buffer.toString();
        console.log(content);
      }
    })
  }
})