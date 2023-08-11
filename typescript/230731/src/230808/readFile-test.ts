import { readFile } from "fs";

readFile('./package.json', (err, buffer) => {
  if(err) throw err
  else {
    const content = buffer.toString();
    console.log(content);
  }
})