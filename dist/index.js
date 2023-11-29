import fs from "fs";
console.log("test");
var add = function (a, b) {
    console.log(a + 2);
};
add(1, 4);
fs.writeFileSync("test.txt", "hiii");
