const { log } = require("console");
const { readFile, writeFile } = require("fs");
console.log("Start");
readFile("./Content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./Content/Second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./Content/result-async.txt",
      `here is the result : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          result;
        }
        console.log("Done with this task");
      }
    );
  });
});
console.log("start");
