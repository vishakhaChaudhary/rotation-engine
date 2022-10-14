import csv from "csv-parser";
import fs from "fs";
import baseHelper from "./utils";
import { saveFile } from "./savefile";

const filePath = process.argv[2];
let finalOutput = [];

fs.createReadStream(filePath)
  .on("error", (err) => {
    throw err;
  })
  .pipe(csv())
  .on("data", (row) => {
    const id = Object.entries(row).reduce(
      ([key, value]) => key.includes("id") && value
    );
    const { json } = row;
    const result = baseHelper.rotationEngine(id, JSON.parse(json));
    finalOutput.push(result);
  })
  .on("end", () => {
    saveFile(finalOutput);
  });
