// This is a live example that you can run with Node
var DocSpring = require("docspring");
require("dotenv").config();
var config = new DocSpring.Configuration();
console.log("testing");
config.apiTokenId = process.env.DOCSPRING;
config.apiTokenSecret = process.env.SECRET;
client = new DocSpring.Client(config);
// client.testAuthentication(function (error, response) {
//   if (error) throw error
//   console.log("DocSpring Setup Acquired", response)
// })
// module.exports = client;

function generateDs11(req, res) {
  var template_id = "tpl_aD7H2ZgJRE54nLMCb9";
  var submission_data = {
    editable: false,
    data: {
      firstName: req.params.firstName,
      lastName: "test2",
      middleName: "test3",
    },
  };
  client.generatePDF(template_id, submission_data, function (error, response) {
    if (error) {
      console.log(response, error);
      throw error;
    }
    var submission = response.submission;
    // console.log("Download your PDF at:", submission.download_url);
    res.redirect(submission.download_url)

  });
}

module.exports.generateDs11 = generateDs11;