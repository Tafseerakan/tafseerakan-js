import fs from "fs";

console.log("test");

const add = (a: number, b: number) => {
  console.log(a + 2);
};
add(1, 4);

fs.writeFileSync("test.txt", "hiii");
