import * as csv from "fast-csv";
import fs from "fs";

const filePath = "src/app/csv/output.csv";

const saveDataToCSV = (result) => {
  const csvStream = csv.format({ headers: true });
  const writeStream = fs.createWriteStream(filePath);

  csvStream.pipe(process.stdout);

  if (result.length > 0) {
    result.map((item) => {
      const { id, json, isValid } = item;
      csvStream.write({
        id,
        json: JSON.stringify(json),
        is_valid: isValid,
      });
    });
  }

  csvStream.pipe(writeStream);
  csvStream.end();
  writeStream.end();
};

export const saveFile = saveDataToCSV;
