const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Agora = require("agora-token");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api',(req,res)=>{
    res.send(`<h5 style="color:green">
        Hello. You just deployed serverless express api</h5>`)
})

app.get("/rtctoken", (req, res) => {
  // const appID = "afee3e6b07a94b28b4736ff2c5937313";
  // const appCertificate = "bb4dfb6f65ef48e8af1fdfda24038a03";
  // const expirationTimeInSeconds = 3600;
  // const uid = 0;
  // const role = Agora.RtcRole.PUBLISHER;
  // const channel = req.body.channel;
  // const currentTimestamp = Math.floor(Date.now() / 1000);
  // const expirationTimestamp = currentTimestamp + expirationTimeInSeconds;

  // const token = Agora.RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channel, uid, role, expirationTimestamp);
  // res.send({ uid, token });
    console.log("hello world");
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

module.exports = app;
