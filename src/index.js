var http = require("http");
var builder = require("xmlbuilder");
const axios = require("axios");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello");
    res.end();
  })
  .listen(8080); //the server object listens on port 8080

axios
  .get(
    "https://api.fubo.tv/v3/kgraph/v2/epg?startTime=2019-09-20T00%3A00%3A00.000Z&endTime=2019-09-20T06%3A00%3A00.000Z"
  )
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("maxi");
  });

var xml = builder
  .create("root")
  .ele("xmlbuilder")
  .ele("repo", { type: "git" }, "git://github.com/oozcitak/xmlbuilder-js.git")
  .end({ pretty: true });

console.log(xml);
