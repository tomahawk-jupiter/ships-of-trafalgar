# Ships of Trafalgar

A table created with React-bootstrap. Filter the data that is displayed in different ways.

I wanted to practice react-bootstrap and also making a search / filter bar that works in real time, ie. as the user types.

## Contents

Trouble Shooting

- [Async and Await Babel setup](#async-and-await-babel-setup)
- [Favicon](#favicon)
- [Papa Parse](#papa-parse)

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

## Papa Parse

Get csv from remote file and parse with [papa-parse](https://www.papaparse.com/).

    $ npm i papaparse

Usage:

    import Papa from 'papaparse';

    Papa.parse(
      URL,
      {
        download: true,
        header: true,
        complete: function (results) {
          console.log(results);
        },
      }
    );

NOTE - header: true will give data in json using the header row for the keys.

I couldn't figure out how to get this working with react. The data wasn't available for the first render and so there were errors.

I ended up just storing the data in its own module.
