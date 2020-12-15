// This is a live example that you can run with Node
var DocSpring = require("docspring");
require("dotenv").config();
var config = new DocSpring.Configuration();
console.log("testing");
config.apiTokenId = process.env.DOCSPRING;
config.apiTokenSecret = process.env.SECRET;
client = new DocSpring.Client(config);

function generateDs11(req, res) {
  var template_id = "tpl_aD7H2ZgJRE54nLMCb9";
  delete req.body._id;
  delete req.body.__v;
  var submission_data = {
    editable: false,
    data: req.body,
  };
  client.generatePDF(template_id, submission_data, function (error, response) {
    if (error) {
      console.log(response, error);
      throw error;
    }
    var submission = response.submission;
    // console.log("Download your PDF at:", submission.download_url);
    res.json({ href: submission.download_url });
  });
}

module.exports.generateDs11 = generateDs11;
