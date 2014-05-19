amdrequire-test
===============
A small website to test the [AMDrequire module](https://github.com/arqex/amdrequire). AMDrequire is NPM package that makes Node understand modules defined in AMD format, the format used by **require.js**.

amdrequire-test creates a simple server with just one page. That page requires some files using require.js and print in the console the result.

The same result should be printed in the node console.

## License
Licensed under BSD-2. [See license](https://raw.githubusercontent.com/arqex/amdrequire-test/master/LICENSE)

## How to install
Install this test site in three steps:
* Clone this repo
* Install its dependencies
* Run app.js
The same in code
```
git clone https://github.com/arqex/amdrequire-test.git
cd amdrequire-test
npm install
node app.js
```

After doing the steps above, open your browser and go to http://localhost:3000 to see the test page and check the console.