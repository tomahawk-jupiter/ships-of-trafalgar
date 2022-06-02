const fs = require("fs");
const axios = require("axios");

/**
 * This file gets csv text data from a url
 * and writes it to a text file.
 * Just run once to create the file.
 */

const getCsvAndWriteToFile = async () => {
  try {
    const data = await axios.get(
      "https://gist.githubusercontent.com/tomahawk-jupiter/b89c2b08a6b545cedec90c0b7b1d54ce/raw/c7eebbc7605957425eb30a7196443c002ed6e1b4/BattleTrafalgarShips.csv"
    );

    await fs.writeFile("./data.txt", data.data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File written successfully!");
    });
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

getCsvAndWriteToFile();
