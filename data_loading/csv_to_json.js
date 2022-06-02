const fs = require("fs/promises");

/**
 *
 * This file just needs to be run once.
 * It creates a json from csv and writes to a .js file
 */

/// READ THE CSV TEXT FILE ///
const readTextCSV = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, "utf8");
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

/// CREATE JSON FROM CSV TEXT DATA ///
const csvToJSON = (csvData) => {
  const rowsArray = csvData.split("\n");
  const headerRow = rowsArray[0].split(",");
  const shipObjectArray = [];

  for (let i = 1; i < rowsArray.length; i++) {
    const row = rowsArray[i].split(",");
    const rowToObjectArray = [];

    for (let j = 0; j < row.length; j++) {
      const key = headerRow[j];
      const value = row[j];

      rowToObjectArray.push({ [key]: value });
    }

    const shipObject = Object.assign({}, ...rowToObjectArray);
    shipObjectArray.push(shipObject);
  }
  return JSON.stringify(shipObjectArray);
};

/// WRITE JSON TO FILE ///
const writeToFileJSON = async (jsonContent) => {
  try {
    await fs.writeFile("./shipData.js", jsonContent);
    console.log("JSON written to file!");
  } catch (err) {
    console.log(err);
  }
};

/// INVOKE ALL ABOVE FUNCTIONS ///
const loadAndCreate = async () => {
  try {
    const csvData = await readTextCSV("./data.txt");
    const jsonContent = csvToJSON(csvData);
    await writeToFileJSON(jsonContent);
    return;
  } catch (err) {
    console.log(err);
  }
};

/// INVOKE ///
// loadAndCreate();
