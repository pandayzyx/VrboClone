const Razorpay = require("razorpay");

const accountSid = "AC8f6a7220d1fe109297386fa3be910901";
const authToken = "2e0ed300dbf29bd3946747d01e910f25";
const SmsClient = require("twilio")(accountSid, authToken);

const razorpay = new Razorpay({
  key_id: process.env.RAZER_KEY_ID,
  key_secret: process.env.RAZER_KEY_SECRET,
});

exports.PayUsingRazorpay = (req, res) => {
  const amount = req.body.amount;

  console.log("req.body", req.body);

  const options = {
    amount: amount,
    currency: "INR",
    receipt: Math.random().toFixed(8),
    payment_capture: true,
  };

  razorpay.orders
    .create(options)
    .then((response) => {
      console.log(response);
      res.send({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errmsg: "Internal Server Error" });
    });
};

exports.verifyRazerPayment = (req, res) => {
  const secret = process.env.RAZER_SECRET;

  console.log(req.body);

  const crypto = require("crypto");

  const crytoData = crypto.createHmac("sha256", secret);
  crytoData.update(JSON.stringify(req.body));
  const digest = crytoData.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    res.send({
      isRazorPaySuccess: true,
      message: "Payment Success",
      signature: digest,
    });
  } else {
    console.log("digest", digest, req.headers);
    res.send({
      isRazorPaySuccess: true,
      message: "Payment Success",
      signature: digest,
    });
  }
};

exports.sendSMS = (req, res) => {
  const receiver = req.body.receiver;
  console.log(receiver);

  SmsClient.messages
    .create({
      body: "Booking successful",
      from: "+14153389348",
      to: `+91${receiver}`,
    })
    .then((message) => {
      console.log(message.sid);
      res.send(message);
    })
    .catch((err) => {
      console.log(err);
      res.send({ err: err });
    });
};
