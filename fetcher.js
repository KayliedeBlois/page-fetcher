const request = require('request');

request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the homepage.
});

const fs = require('fs');

const content = process.argv[2];

// function getFilesizeInBytes(filename) {
//   let stats = fs.statSync(filename);
//   let FilesizeInBytes = stats.size;
//   return FilesizeInBytes
// }

const {size} = fs.statSync('/cd/page-fetcher');

fs.writeFile('/cd/page-fetcher', content, err => {
  if (err) {
    console.error(err);
  }
  console.log("Downloaded and saved " + {size} + "bytes to" + process.argv[3]);
  // file written successfully
});