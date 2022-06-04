# Ships of Trafalgar

A table created with React-bootstrap. Data can be filtered by various categories.

## Contents

- [Overview](#overview)
- [Async and Await Babel setup](#async-and-await-babel-setup)
- [Favicon](#favicon)
- [Papa Parse](#papa-parse)

## Overview

I wanted to try out react-bootstrap and also make a search / filter input that works in real time, ie. as the user types.

The bulk of the content is a table created in the `ShipTable` component.

The header row is made up of input components that can be used to filter the tables data.

Each input component is created in its own react component using react-bootstrap components. The user input from these are stored in useState values in the main table component. The setValue functions are passed as props.

All the filtering logic is in a useEffect hook in the `ShipTable` component.

Each ship in the table is also a button that will display details about the outcome of the battle. This is achieved using the `OverlayTrigger` and `Popover` components from `React-bootstrap`.

The info within the popovers is from the original data that I didn't include in the table.

[Contents](#contents)

### Ship Data

The ship data originally came from wikipedia.

## Trouble Shooting

Things I had to look up. I didn't use all these things in the end but its useful to know for the future.

### Async and Await Babel setup

Async & Await not working in my webpack / babel setup, found this solution:

    npm i -D @babel/plugin-transform-runtime

In .babelrc:

    "plugins": [
      ["@babel/transform-runtime", {
        "regenerator": true
      }]
    ]

[Contents](#contents)

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

NOTE - header: true will parse the data to json using the header row for the keys.

I couldn't figure out how to get this working with react. I tried loading data (using papaparse) in a useEffect hook and storing in a useState value but this value was undefined and caused errors. I think this is because it wasn't available on the first render.

[Contents](#contents)
