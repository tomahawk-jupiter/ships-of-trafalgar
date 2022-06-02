# Ships of Trafalgar

## Contents

Trouble Shooting

- [Async and Await Babel setup](#async-and-await-babel-setup)
- [Favicon](#favicon)

File System CSV to JSON

- [Write File From GET response plain text csv](#write-file-from-get-response-plain-text-csv)
- [Async & Await with FS](#async--await-with-fs)
- [Convert CSV to JSON Using nodeJS](#convert-csv-to-json-using-node)

## Trouble Shooting

### Async and Await Babel setup

Async & Await not working in my webpack / babel setup, found this solution:

    npm i -D @babel/plugin-transform-runtime

In .babelrc:

    "plugins": [
      ["@babel/transform-runtime", {
        "regenerator": true
      }]
    ]

### Favicon

To include a favicon put this in the `webpack.config.js`:

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/favicon.ico",
      }),
    ],

## File System Module

### Write File From GET response plain text csv

I done this in `write-file.js`.

    $ node write-file.js

It uses axios to get some csv data from a github gist. Its plain text data.

Then use `fs` built in node module to write to a file.

### Async & Await with FS

    const fs = require("fs/promises");

This allows the use of async and await when using the file system.

### Convert CSV to JSON Using nodeJS

This is done in `csv_to_json.js`.

First I read the csv text file with FS.

Split on the `\n` character to get an array of rows.

Loop through the rows and split on commas to get an array of columns for each row.

A nested loop to go through the columns of each row.

I then create an object for each value using the header row as the key and each index of the row as the value. So the row changes on each outer loop iteration but the header row is the same each time.

Each key: value pair is pushed into an array of objects and at the end of each row iteration the array of objects is spread into a single object.

This single object is then pushed into the final array of ship objects.

Now the CSV text file has been converted into an object. This can then be saved to its own file.
