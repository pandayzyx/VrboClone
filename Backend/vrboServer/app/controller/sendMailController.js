const { body, validationResult } = require("express-validator");
const aws = require("aws-sdk");

aws.config.update({
  region: process.env.AWS_REGION,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
});

const ses = new aws.SES();

exports.sendBookingSuccessMail = (req, res) => {
  const receiver = req.body.receiver;

  const email = "VrboClone@gmail.com";

  let ses_mail = "From: 'AWS Tutorial Series' <" + email + ">\n";
  ses_mail = ses_mail + "To: " + receiver + "\n";
  ses_mail = ses_mail + "Subject: Payment Successfull\n";
  ses_mail = ses_mail + "MIME-Version: 1.0\n";
  ses_mail =
    ses_mail + 'Content-Type: multipart/mixed; boundary="NextPart"\n\n';
  ses_mail = ses_mail + "--NextPart\n";
  ses_mail = ses_mail + "Content-Type: text/html; charset=us-ascii\n\n";
  ses_mail = ses_mail + "This is the body of the email.\n\n";

  const params = {
    RawMessage: { Data: new Buffer(ses_mail) },
    Destinations: [receiver],
    Source: "'AWS Tutorial Series' <" + email + ">'",
  };

  ses.sendRawEmail(params, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};
