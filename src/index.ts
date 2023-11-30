import fs from "fs";

console.log("test");

const add = (a: number, b: number) => {
  console.log(a + b);
};
add(1, 4);

fs.writeFileSync("test.txt", "hiii");
