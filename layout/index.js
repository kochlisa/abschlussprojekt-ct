const path = require("path");
const fs = require("fs");

const { createCanvas } = require("canvas");

const { loadTable } = require("./lib/load-table");
const { map } = require("./lib/map");
const width = 200;
const height = 200;
const canvas = createCanvas(width, height, "svg");
const ctx = canvas.getContext("2d");

let outFilePath = path.resolve(process.cwd(), `./out/sketch.svg`);

loadTable("./data/foobah.csv", ",", true)
  .then((table) => {
    // YOUR CODE STARTS HERE YOUR CODE STARTS HERE YOUR CODE STARTS HERE
    // YOUR CODE STARTS HERE YOUR CODE STARTS HERE YOUR CODE STARTS HERE
    // YOUR CODE STARTS HERE YOUR CODE STARTS HERE YOUR CODE STARTS HERE
    // YOUR CODE STARTS HERE YOUR CODE STARTS HERE YOUR CODE STARTS HERE
    // YOUR CODE STARTS HERE YOUR CODE STARTS HERE YOUR CODE STARTS HERE
    //----------------------------------------------------------------
    const min = 0;
    const max = 200;
    const lines = [2,4,5,7,8];

    const step = width / lines.length;
    let x = 0; // start at 0
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    for (let i = 0; i < lines.length; i++) {
      // loop all nums in convertedToNum array
      const value = lines[i]; // isolate the value
      const mappedValue = map(value, min, max, 0, height); // map it into the screen size
      ctx.lineTo(x, height / 2 - mappedValue / 2); // draw two verticies one on the top
      ctx.lineTo(x, height / 2 + mappedValue / 2); // and one on the bottm
      x += step;
    }
    ctx.stroke();

    // YOUR CODE ENDS HERE YOUR CODE ENDS HERE YOUR CODE ENDS HERE
    // YOUR CODE ENDS HERE YOUR CODE ENDS HERE YOUR CODE ENDS HERE
    // YOUR CODE ENDS HERE YOUR CODE ENDS HERE YOUR CODE ENDS HERE
    // YOUR CODE ENDS HERE YOUR CODE ENDS HERE...
    fs.writeFileSync(outFilePath, canvas.toBuffer());
  })
  .catch((err) => {
    throw err;
  });
